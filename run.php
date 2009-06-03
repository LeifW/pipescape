<?php
$xml = $_POST["config"];
$dom = new DOMDocument();
$dom->loadXML($xml);

$xsl = new DOMDocument();
$xsl->load('proc.xsl');
$proc = new XSLTProcessor();
$proc->importStyleSheet($xsl);

$xpl = $proc->transformToXML($dom);

$pipefname = tempnam("/tmp", "xpl");
$pipefile = fopen($pipefname, "w");
fwrite($pipefile, $xpl);

#echo fread
fclose($pipefile);

#echo($pipefname . "\n");
passthru("calabash " . $pipefname  . " 2>&1");
#passthru("/bin/ls" );
unlink($pipefname);
?>
