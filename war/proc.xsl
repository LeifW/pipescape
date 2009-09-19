<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:exsl="http://exslt.org/common" extension-element-prefixes="exsl" xmlns:p="http://www.w3.org/ns/xproc" xmlns:c="http://www.w3.org/ns/xproc-step">
  <xsl:output indent="yes"/>


  <xsl:template match="value">
    <p:declare-step name="{name}">
      <xsl:apply-templates select="working/modules">
        <xsl:sort select="config/position[2]" data-type="number"/>
      </xsl:apply-templates>
    </p:declare-step>
  </xsl:template>

  <xsl:template match="modules">
    <xsl:variable name="curPos" select="position()-1"/>
    <xsl:element name="{concat('p:',name)}">
      <xsl:attribute name="name">
        <xsl:value-of select="concat(name,position())"/>
      </xsl:attribute>
      <xsl:apply-templates select="value/*" mode="options"/>
      <xsl:apply-templates select="../wires[tgt/moduleId=$curPos]"/>
    </xsl:element>
  </xsl:template>

  <xsl:template match="wires">
    <xsl:variable name="from" select="src/moduleId+1"/>
    <p:input port="{tgt/terminal}">
      <p:pipe step="{concat(../modules[$from]/name,$from)}" port="{src/terminal}"/>
    </p:input>
  </xsl:template>

  <xsl:template match="*" mode="options">
    <xsl:attribute name="{name()}">
      <xsl:value-of select="."/>
    </xsl:attribute>
  </xsl:template>
</xsl:stylesheet>
