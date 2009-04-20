declare namespace d="http://docbook.org/ns/docbook"; 
declare namespace p="http://www.w3.org/ns/xproc"; 
declare namespace e="http://www.w3.org/1999/XSL/Spec/ElementSyntax"; 
<p:library xmlns="http://docbook.org/ns/docbook" xmlns:e="http://www.w3.org/1999/XSL/Spec/ElementSyntax"
             xmlns:xi="http://www.w3.org/2001/XInclude"
             xmlns:cs="http://www.w3.org/XML/XProc/2006/04/components#"
	     xmlns:xlink="http://www.w3.org/1999/xlink" >{
for $step in doc("http://www.w3.org/TR/xproc/langspec.xml")/id("std-components")/d:section/d:section/p:declare-step
  return $step
 }</p:library>
