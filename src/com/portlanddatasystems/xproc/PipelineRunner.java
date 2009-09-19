/**
 * 
 */
package com.portlanddatasystems.xproc;

import java.io.File;
import java.io.OutputStream;
import java.io.IOException;
import javax.servlet.ServletOutputStream;
import java.io.Reader;

import javax.xml.transform.sax.SAXSource;
import javax.xml.transform.stream.StreamSource;

import org.xml.sax.InputSource;

import net.sf.saxon.s9api.DocumentBuilder;
import net.sf.saxon.s9api.Processor;
import net.sf.saxon.s9api.SaxonApiException;
import net.sf.saxon.s9api.XdmDestination;
import net.sf.saxon.s9api.XdmNode;
import net.sf.saxon.s9api.XsltCompiler;
import net.sf.saxon.s9api.XsltExecutable;
import net.sf.saxon.s9api.XsltTransformer;
import net.sf.saxon.s9api.QName;
import net.sf.saxon.s9api.XdmSequenceIterator;
import net.sf.saxon.s9api.Axis;

import com.xmlcalabash.core.XProcConfiguration;
import com.xmlcalabash.core.XProcRuntime;
import com.xmlcalabash.core.XProcException;
import com.xmlcalabash.io.ReadablePipe;
import com.xmlcalabash.runtime.XPipeline;

import com.xmlcalabash.util.URIUtils;

import java.security.AccessControlException;

import java.io.InputStream;

/**
		
 * @author Leif Warner, Norman Walsh
 *
 */
public class PipelineRunner {
        private static final String logger = "com.xmlcalabash.drivers";
        private static QName _code = new QName("code");
	DocumentBuilder builder = null;
	XsltTransformer trans = null;
	XProcRuntime runtime = null;
	
	public PipelineRunner(InputStream xslSheet) {
		XProcConfiguration config = new XProcConfiguration();
		config.debug = true;
		this.runtime = new XProcRuntime(config);
		//GenericConfig config = new GenericConfig();
		//this.runtime = new XProcRuntime(config);
		Processor proc = runtime.getProcessor();
		this.builder = proc.newDocumentBuilder();
		XsltCompiler comp = proc.newXsltCompiler();
		XsltExecutable exp = null;
		try {
			//xslStylesheet = getServeletContext().getResourceAsStream("/WEB-INF/proc.xsl");
			exp = comp.compile(new StreamSource(xslSheet));
			//exp = comp.compile(new StreamSource(new File("proc.xsl")));
		} catch (SaxonApiException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		this.trans = exp.load(); 
	}

	public String run(Reader input, OutputStream output) {
		XdmNode source = null; 
                String aftermath = null;
		try {
			source = builder.build(new SAXSource(new InputSource(input)));
		//} catch (SaxonApiException e) {
			// TODO Auto-generated catch block
		//	e.printStackTrace();
		//}
			trans.setInitialContextNode(source);
			XdmDestination pipeDoc = new XdmDestination();
			trans.setDestination(pipeDoc);
			XPipeline pipeline = null;
		//try {
		        trans.transform();
			pipeline = runtime.use(pipeDoc.getXdmNode());
			pipeline.run();
		//} catch (SaxonApiException e) {
			// TODO Auto-generated catch block
		//	e.printStackTrace();
		//}
		
		//pipeline.getSerialization("result");
		//Serialization serial
		
		//wd = new GenericWritableDocument(runtime, null, serial);
			GenericWritableDocument wd = new GenericWritableDocument(runtime, null, null, output);
		//--where serial is pipeline.getSerialization(port)
			ReadablePipe rpipe = pipeline.readFrom("result");
		//while...
		//try {
			wd.write(rpipe.read());
		//} catch (SaxonApiException e) {
			// TODO Auto-generated catch block
		//	e.printStackTrace();
		} catch (XProcException err) {
                    if (err.getErrorCode() != null) {
		        String message = "Pipeline failed: err:" + err.getErrorCode() + ": " + err.getMessage();
                        if (err.getStep() != null) {
                            message += "  at " + err.getStep();
                        }
                        message += "  " + errorMessage(err.getErrorCode());
                        //runtime.error(logger, null, message, err.getErrorCode());
                        //output.println("Error: " + message);
                        aftermath = "Error: " + message;
                        if (err.getCause() != null) {
                            Throwable cause = err.getCause();
                            //runtime.error(logger, null, "Underlying exception: " + cause, null);
                            aftermath += "\n Underlying exception: " + cause;
                        }
                        if (runtime.getDebug()) {
                            err.printStackTrace();
                        }
                    } else {
                        //runtime.error(logger, null, "Pipeline failed: " + err.toString(), null);
                        //output.println("Pipeline failed: " + err.toString());
                        aftermath = "Pipeline failed: " + err.toString();
                        if (err.getCause() != null) {
                            Throwable cause = err.getCause();
                            //runtime.error(logger, null, "Underlying exception: " + cause, null);
                            //output.println("Underlying exception: " + cause);
                            aftermath += "\n Underlying exception: " + cause;
                        }
                        if (runtime.getDebug()) {
                            err.printStackTrace();
                        }
                    }
                } catch (Exception err) {
                    if (runtime != null) {
                        //runtime.error(logger, null, "Pipeline failed: " + err.toString(), null);
                        //output.println("Pipeline failed: " + err.toString());
                        aftermath = "Pipeline failed: " + err.toString();
                        if (err.getCause() != null) {
                            Throwable cause = err.getCause();
                            //runtime.error(logger, null, "Underlying exception: " + cause, null);
                            //output.println("Underlying exception: " + cause);
                            aftermath += "\n Underlying exception: " + cause;
                        }
                        if (runtime.getDebug()) {
                            err.printStackTrace();
                        }
                    } else {
                        throw new RuntimeException(err);
                    }
                }
	    return aftermath;
	}

    private String errorMessage(QName code) {
        InputStream instream = getClass().getResourceAsStream("/etc/error-list.xml"); //TODO - Get proper path to this
        if (instream != null) {
            try {
                SAXSource source = new SAXSource(new InputSource(instream));
                DocumentBuilder builder = runtime.getProcessor().newDocumentBuilder();
                XdmNode doc = builder.build(source);
                XdmSequenceIterator iter = doc.axisIterator(Axis.DESCENDANT, new QName("error"));
                while (iter.hasNext()) {
                    XdmNode error = (XdmNode) iter.next();
                    if (code.getLocalName().equals(error.getAttributeValue(_code))) {
                        return error.getStringValue();
                    }
                }
            } catch (SaxonApiException sae) {
                // nop;
            }
        }
        return "Unknown error";
    }
}
