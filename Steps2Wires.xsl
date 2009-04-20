<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:p="http://www.w3.org/ns/xproc" xmlns:e="http://www.w3.org/1999/XSL/Spec/ElementSyntax"
      exclude-result-prefixes="xs p"
      version="2.0">
    <xsl:output method="text"/>
    <xsl:strip-space elements="*"/>

<xsl:template match="/">
var xprocLanguage = {
languageName: "XProc",
propertiesFields: [
	{"type": "string", inputParams: {"name": "name", label: "Title", typeInvite: "Enter a title" } },
	{"type": "text", inputParams: {"name": "description", label: "Description", cols: 30} }
],
modules: [
<xsl:apply-templates/>
]
};
</xsl:template>
    
<xsl:template match="p:declare-step">
    {
        "name": "<xsl:value-of select="substring(@type,3)"/>",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "<xsl:value-of select="@type"/>",
            "terminals": [
                <xsl:apply-templates select="p:input"/><xsl:if test="p:input and p:output">,</xsl:if>
		<xsl:apply-templates select="p:output"/>
                ]
    <xsl:if test="p:option">, "fields": [
        <xsl:apply-templates select="p:option"/>
        ]</xsl:if>
                }
    }<xsl:if test="position() != last()">,</xsl:if>
</xsl:template>
    
    <xsl:template match="p:input">
	    {"name": "<xsl:value-of select="@port"/>", "direction": [0,-1], "offsetPosition":{"left": <xsl:value-of select="60 + 40 * position()"/>, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} }<xsl:if test="position() != last()">,</xsl:if>
    </xsl:template>
 
    <xsl:template match="p:output">
	    {"name": "<xsl:value-of select="@port"/>", "direction": [0,1], "offsetPosition":{"left": <xsl:value-of select="60 + 40 * position()"/>, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }<xsl:if test="position() != last()">,</xsl:if>
    </xsl:template>
    
    <xsl:template match="p:option">
	    {<xsl:apply-templates mode="type" select="@e:type"/>"inputParams": {"label": "<xsl:value-of select="@name"/>"<xsl:apply-templates select="@select|@name|@required|@e:type[contains(., '|')]"/> } }<xsl:if test="position() != last()">,</xsl:if>
    </xsl:template>
     
    <xsl:template match="@name|@required">, "<xsl:value-of select="name()"/>": "<xsl:value-of select="."/>"</xsl:template>
	    
    <!-- No quotes around booleans -->
    <xsl:template match="@select[../@e:type='xsd:boolean']">, "value": <xsl:value-of select="substring(., 2, string-length()-2)"/></xsl:template>
    <!-- Otherwise, quote the value -->
    <xsl:template match="@select">, "value": "<xsl:value-of select="substring(., 2, string-length()-2)"/>"</xsl:template>

    <xsl:template match="@e:type[contains(.,'|')]">, "selectValues": [<xsl:value-of select="concat('''', replace(.,'\|', ''', '''), '''')"/>]</xsl:template>

    <xsl:template mode="type" match="@e:type[.='xsd:boolean']">"type": "boolean", </xsl:template>
    <xsl:template mode="type" match="@e:type[.='xsd:integer']">"type": "integer", </xsl:template>
    <xsl:template mode="type" match="@e:type[.='xsd:anyURI']">"type": "url", </xsl:template>
    <xsl:template mode="type" match="@e:type[contains(.,'|')]">"type": "select", </xsl:template>
    <!-- Treat the other types as strings, don't leave a type signature: -->
    <xsl:template mode="type" match="@e:type"/>

</xsl:stylesheet>
