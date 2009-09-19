<?xml version="1.0"?>
<p:declare-step xmlns:p="http://www.w3.org/ns/xproc" xmlns:c="http://www.w3.org/ns/xproc-step">
  <p:input port="parameters" kind="parameter"/>
  <p:input port="source">
    <p:document href="cal.xpl"/>
  </p:input>
  <p:output port="result" sequence="true"/>

  <p:identity/>
</p:declare-step>
