declare namespace p="http://www.w3.org/ns/xproc"; 
<steps xmlns:p="http://www.w3.org/ns/xproc">{
  for $step in p:library/p:declare-step 
  return <step type="{$step/@type}">icon</step>
}</steps>
