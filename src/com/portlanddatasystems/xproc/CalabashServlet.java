package com.portlanddatasystems.xproc;

import java.io.IOException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.*;

//import net.sf.saxon.s9api.SaxonApiException;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.StringReader;

import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.FileItemStream;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import java.io.InputStream;

import javax.servlet.ServletException;

//import java.net.URI;
//import com.xmlcalabash.util.URIUtils;
//import java.io.PrintWriter;

@SuppressWarnings("serial")
public class CalabashServlet extends HttpServlet {
	PipelineRunner pipeline = null;
	ServletFileUpload upload; 
	
	public void init() {
		InputStream xslSheet = getServletContext().getResourceAsStream("/WEB-INF/proc.xsl");
		this.pipeline = new PipelineRunner(xslSheet);
		this.upload = new ServletFileUpload();
	}
	
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws IOException {
		resp.setContentType("text/plain");
		resp.getWriter().println("You're supposed to POST an XProc-ish file to this URL.");
		//PrintWriter out = resp.getWriter();
		//out.println("You're supposed to POST an XProc-ish file to this URL.");
		//out.println("That's all");
	}
	
	public void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		//StringReader input = new StringReader(req.getParam("config"));
		//BufferedReader input = req.getReader();
		//XdmNode pipeline = input.transform("pipeline.xsl");
		//XdmNode pipeline = builder.build(new SAXSource(new InputSource(req.getReader())));
		ServletOutputStream output = resp.getOutputStream();
		//output.println("Ok...\n");
		
		resp.setContentType("application/xml");
		//resp.setContentType("text/plain");
		//String filename = getServletContext().getRealPath("/WEB-INF/web.xml"); //getContext TODO
		//output.println(filename);
		
		FileItemIterator iter = null;
		FileItemStream item = null;
		//ServletFileUpload upload = new ServletFileUpload();
		try {
			iter = upload.getItemIterator(req);
		} catch (FileUploadException fue) {
			output.println("Bad servlet iter!");
			System.out.println("Bad out iter!");
			fue.printStackTrace();
		}
		try {
			item = iter.next();
		} catch (FileUploadException fue) {
			output.println("Bad servlet next!");
			System.out.println("Bad out next!");
			fue.printStackTrace();
		}
		InputStream in = item.openStream();
		//output.println(in.toString());
		BufferedReader input = new BufferedReader(new InputStreamReader(in));
		
		//output.println(input.toString());
		//String line;
		//while ((line = input.readLine()) != null) {
		//    output.println(line);
		//}
		//output.println(pipeline.toString());
		//output.println(home.toString());
		//output.println(cwd.toString());
		//output.println("That's all");
		String aftermath = pipeline.run(input, output);
		if (aftermath != null) {
		    output.println("<error>");
		    output.println(aftermath);
		    output.println("</error>");
		}
	} 
}
