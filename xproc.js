
var demoLanguage = {
languageName: "XProc",
propertiesFields: [
	{"type": "string", inputParams: {"name": "name", label: "Title", typeInvite: "Enter a title" } },
	{"type": "text", inputParams: {"name": "description", label: "Description", cols: 30} }
],
modules: [

    {
        "name": "add-attribute",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:add-attribute",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "match", "name": "match", "required": "true" } },
	    {"inputParams": {"label": "attribute-name", "name": "attribute-name", "required": "true" } },
	    {"inputParams": {"label": "attribute-value", "name": "attribute-value", "required": "true" } }
        ]
                }
    },
    {
        "name": "add-xml-base",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:add-xml-base",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "boolean", "inputParams": {"label": "all", "name": "all", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "relative", "name": "relative", "value": true } }
        ]
                }
    },
    {
        "name": "compare",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:compare",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "alternate", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "boolean", "inputParams": {"label": "fail-if-not-equal", "name": "fail-if-not-equal", "value": false } }
        ]
                }
    },
    {
        "name": "count",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:count",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "integer", "inputParams": {"label": "limit", "name": "limit", "value": "" } }
        ]
                }
    },
    {
        "name": "delete",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:delete",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "match", "name": "match", "required": "true" } }
        ]
                }
    },
    {
        "name": "directory-list",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:directory-list",
            "terminals": [
                
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "url", "inputParams": {"label": "path", "name": "path", "required": "true" } },
	    {"inputParams": {"label": "include-filter", "name": "include-filter" } },
	    {"inputParams": {"label": "exclude-filter", "name": "exclude-filter" } }
        ]
                }
    },
    {
        "name": "error",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:error",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "code", "name": "code", "required": "true" } }
        ]
                }
    },
    {
        "name": "escape-markup",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:escape-markup",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "cdata-section-elements", "name": "cdata-section-elements", "value": "" } },
	    {"inputParams": {"label": "doctype-public", "name": "doctype-public" } },
	    {"type": "url", "inputParams": {"label": "doctype-system", "name": "doctype-system" } },
	    {"type": "boolean", "inputParams": {"label": "escape-uri-attributes", "name": "escape-uri-attributes", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "include-content-type", "name": "include-content-type", "value": true } },
	    {"type": "boolean", "inputParams": {"label": "indent", "name": "indent", "value": false } },
	    {"inputParams": {"label": "media-type", "name": "media-type" } },
	    {"inputParams": {"label": "method", "name": "method", "value": "xml" } },
	    {"type": "boolean", "inputParams": {"label": "omit-xml-declaration", "name": "omit-xml-declaration", "value": true } },
	    {"type": "select", "inputParams": {"label": "standalone", "name": "standalone", "value": "omit", "selectValues": ['true', 'false', 'omit'] } },
	    {"type": "boolean", "inputParams": {"label": "undeclare-prefixes", "name": "undeclare-prefixes" } },
	    {"inputParams": {"label": "version", "name": "version", "value": "1.0" } }
        ]
                }
    },
    {
        "name": "filter",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:filter",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "select", "name": "select", "required": "true" } }
        ]
                }
    },
    {
        "name": "http-request",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:http-request",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "boolean", "inputParams": {"label": "byte-order-mark", "name": "byte-order-mark" } },
	    {"inputParams": {"label": "cdata-section-elements", "name": "cdata-section-elements", "value": "" } },
	    {"inputParams": {"label": "doctype-public", "name": "doctype-public" } },
	    {"type": "url", "inputParams": {"label": "doctype-system", "name": "doctype-system" } },
	    {"inputParams": {"label": "encoding", "name": "encoding" } },
	    {"type": "boolean", "inputParams": {"label": "escape-uri-attributes", "name": "escape-uri-attributes", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "include-content-type", "name": "include-content-type", "value": true } },
	    {"type": "boolean", "inputParams": {"label": "indent", "name": "indent", "value": false } },
	    {"inputParams": {"label": "media-type", "name": "media-type" } },
	    {"inputParams": {"label": "method", "name": "method", "value": "xml" } },
	    {"inputParams": {"label": "normalization-form", "name": "normalization-form", "value": "none" } },
	    {"type": "boolean", "inputParams": {"label": "omit-xml-declaration", "name": "omit-xml-declaration", "value": true } },
	    {"type": "select", "inputParams": {"label": "standalone", "name": "standalone", "value": "omit", "selectValues": ['true', 'false', 'omit'] } },
	    {"type": "boolean", "inputParams": {"label": "undeclare-prefixes", "name": "undeclare-prefixes" } },
	    {"inputParams": {"label": "version", "name": "version", "value": "1.0" } }
        ]
                }
    },
    {
        "name": "identity",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:identity",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    
                }
    },
    {
        "name": "insert",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:insert",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "insertion", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "match", "name": "match", "value": "/*" } },
	    {"type": "select", "inputParams": {"label": "position", "name": "position", "required": "true", "selectValues": ['first-child', 'last-child', 'before', 'after'] } }
        ]
                }
    },
    {
        "name": "label-elements",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:label-elements",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "attribute", "name": "attribute", "value": "xml:id" } },
	    {"inputParams": {"label": "label", "name": "label", "value": "concat(\"_\",$p:index)" } },
	    {"inputParams": {"label": "match", "name": "match", "value": "*" } },
	    {"type": "boolean", "inputParams": {"label": "replace", "name": "replace", "value": true } }
        ]
                }
    },
    {
        "name": "load",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:load",
            "terminals": [
                
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "url", "inputParams": {"label": "href", "name": "href", "required": "true" } },
	    {"type": "boolean", "inputParams": {"label": "dtd-validate", "name": "dtd-validate", "value": false } }
        ]
                }
    },
    {
        "name": "make-absolute-uris",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:make-absolute-uris",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "match", "name": "match", "required": "true" } },
	    {"type": "url", "inputParams": {"label": "base-uri", "name": "base-uri" } }
        ]
                }
    },
    {
        "name": "namespace-rename",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:namespace-rename",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "url", "inputParams": {"label": "from", "name": "from" } },
	    {"type": "url", "inputParams": {"label": "to", "name": "to" } },
	    {"type": "select", "inputParams": {"label": "apply-to", "name": "apply-to", "value": "all", "selectValues": ['all', 'elements', 'attributes'] } }
        ]
                }
    },
    {
        "name": "pack",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:pack",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "alternate", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "wrapper", "name": "wrapper", "required": "true" } }
        ]
                }
    },
    {
        "name": "parameters",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:parameters",
            "terminals": [
                
	    {"name": "parameters", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    
                }
    },
    {
        "name": "rename",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:rename",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "match", "name": "match", "required": "true" } },
	    {"inputParams": {"label": "new-name", "name": "new-name", "required": "true" } }
        ]
                }
    },
    {
        "name": "replace",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:replace",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "replacement", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "match", "name": "match", "required": "true" } }
        ]
                }
    },
    {
        "name": "set-attributes",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:set-attributes",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "attributes", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "match", "name": "match", "required": "true" } }
        ]
                }
    },
    {
        "name": "sink",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:sink",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} }
                ]
    
                }
    },
    {
        "name": "split-sequence",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:split-sequence",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "matched", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} },
	    {"name": "not-matched", "direction": [0,1], "offsetPosition":{"left": 140, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "boolean", "inputParams": {"label": "initial-only", "name": "initial-only", "value": false } },
	    {"inputParams": {"label": "test", "name": "test", "required": "true" } }
        ]
                }
    },
    {
        "name": "store",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:store",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "url", "inputParams": {"label": "href", "name": "href", "required": "true" } },
	    {"type": "boolean", "inputParams": {"label": "byte-order-mark", "name": "byte-order-mark" } },
	    {"inputParams": {"label": "cdata-section-elements", "name": "cdata-section-elements", "value": "" } },
	    {"inputParams": {"label": "doctype-public", "name": "doctype-public" } },
	    {"type": "url", "inputParams": {"label": "doctype-system", "name": "doctype-system" } },
	    {"inputParams": {"label": "encoding", "name": "encoding" } },
	    {"type": "boolean", "inputParams": {"label": "escape-uri-attributes", "name": "escape-uri-attributes", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "include-content-type", "name": "include-content-type", "value": true } },
	    {"type": "boolean", "inputParams": {"label": "indent", "name": "indent", "value": false } },
	    {"inputParams": {"label": "media-type", "name": "media-type" } },
	    {"inputParams": {"label": "method", "name": "method", "value": "xml" } },
	    {"inputParams": {"label": "normalization-form", "name": "normalization-form", "value": "none" } },
	    {"type": "boolean", "inputParams": {"label": "omit-xml-declaration", "name": "omit-xml-declaration", "value": true } },
	    {"type": "select", "inputParams": {"label": "standalone", "name": "standalone", "value": "omit", "selectValues": ['true', 'false', 'omit'] } },
	    {"type": "boolean", "inputParams": {"label": "undeclare-prefixes", "name": "undeclare-prefixes" } },
	    {"inputParams": {"label": "version", "name": "version", "value": "1.0" } }
        ]
                }
    },
    {
        "name": "string-replace",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:string-replace",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "match", "name": "match", "required": "true" } },
	    {"inputParams": {"label": "replace", "name": "replace", "required": "true" } }
        ]
                }
    },
    {
        "name": "unescape-markup",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:unescape-markup",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "url", "inputParams": {"label": "namespace", "name": "namespace" } },
	    {"inputParams": {"label": "content-type", "name": "content-type", "value": "application/xml" } },
	    {"inputParams": {"label": "encoding", "name": "encoding" } },
	    {"inputParams": {"label": "charset", "name": "charset" } }
        ]
                }
    },
    {
        "name": "unwrap",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:unwrap",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "match", "name": "match", "required": "true" } }
        ]
                }
    },
    {
        "name": "wrap",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:wrap",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "wrapper", "name": "wrapper", "required": "true" } },
	    {"inputParams": {"label": "match", "name": "match", "required": "true" } },
	    {"inputParams": {"label": "group-adjacent", "name": "group-adjacent" } }
        ]
                }
    },
    {
        "name": "wrap-sequence",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:wrap-sequence",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "wrapper", "name": "wrapper", "required": "true" } },
	    {"inputParams": {"label": "group-adjacent", "name": "group-adjacent" } }
        ]
                }
    },
    {
        "name": "xinclude",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:xinclude",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "boolean", "inputParams": {"label": "fixup-xml-base", "name": "fixup-xml-base", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "fixup-xml-lang", "name": "fixup-xml-lang", "value": false } }
        ]
                }
    },
    {
        "name": "xslt",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:xslt",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "stylesheet", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "parameters", "direction": [0,-1], "offsetPosition":{"left": 180, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} },
	    {"name": "secondary", "direction": [0,1], "offsetPosition":{"left": 140, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "initial-mode", "name": "initial-mode" } },
	    {"inputParams": {"label": "template-name", "name": "template-name" } },
	    {"type": "url", "inputParams": {"label": "output-base-uri", "name": "output-base-uri" } },
	    {"inputParams": {"label": "version", "name": "version" } }
        ]
                }
    },
    {
        "name": "exec",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:exec",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} },
	    {"name": "errors", "direction": [0,1], "offsetPosition":{"left": 140, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "command", "name": "command", "required": "true" } },
	    {"inputParams": {"label": "args", "name": "args", "value": "" } },
	    {"inputParams": {"label": "cwd", "name": "cwd" } },
	    {"type": "boolean", "inputParams": {"label": "source-is-xml", "name": "source-is-xml", "value": true } },
	    {"type": "boolean", "inputParams": {"label": "result-is-xml", "name": "result-is-xml", "value": true } },
	    {"type": "boolean", "inputParams": {"label": "wrap-result-lines", "name": "wrap-result-lines", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "errors-is-xml", "name": "errors-is-xml", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "wrap-error-lines", "name": "wrap-error-lines", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "fix-slashes", "name": "fix-slashes", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "byte-order-mark", "name": "byte-order-mark" } },
	    {"inputParams": {"label": "cdata-section-elements", "name": "cdata-section-elements", "value": "" } },
	    {"inputParams": {"label": "doctype-public", "name": "doctype-public" } },
	    {"type": "url", "inputParams": {"label": "doctype-system", "name": "doctype-system" } },
	    {"inputParams": {"label": "encoding", "name": "encoding" } },
	    {"type": "boolean", "inputParams": {"label": "escape-uri-attributes", "name": "escape-uri-attributes", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "include-content-type", "name": "include-content-type", "value": true } },
	    {"type": "boolean", "inputParams": {"label": "indent", "name": "indent", "value": false } },
	    {"inputParams": {"label": "media-type", "name": "media-type" } },
	    {"inputParams": {"label": "method", "name": "method", "value": "xml" } },
	    {"inputParams": {"label": "normalization-form", "name": "normalization-form", "value": "none" } },
	    {"type": "boolean", "inputParams": {"label": "omit-xml-declaration", "name": "omit-xml-declaration", "value": true } },
	    {"type": "select", "inputParams": {"label": "standalone", "name": "standalone", "value": "omit", "selectValues": ['true', 'false', 'omit'] } },
	    {"type": "boolean", "inputParams": {"label": "undeclare-prefixes", "name": "undeclare-prefixes" } },
	    {"inputParams": {"label": "version", "name": "version", "value": "1.0" } }
        ]
                }
    },
    {
        "name": "hash",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:hash",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "parameters", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "value", "name": "value", "required": "true" } },
	    {"inputParams": {"label": "algorithm", "name": "algorithm", "required": "true" } },
	    {"inputParams": {"label": "match", "name": "match", "required": "true" } },
	    {"inputParams": {"label": "version", "name": "version" } }
        ]
                }
    },
    {
        "name": "uuid",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:uuid",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "match", "name": "match", "required": "true" } },
	    {"type": "integer", "inputParams": {"label": "version", "name": "version" } }
        ]
                }
    },
    {
        "name": "validate-with-relax-ng",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:validate-with-relax-ng",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "schema", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "boolean", "inputParams": {"label": "dtd-attribute-values", "name": "dtd-attribute-values", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "dtd-id-idref-warnings", "name": "dtd-id-idref-warnings", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "assert-valid", "name": "assert-valid", "value": true } }
        ]
                }
    },
    {
        "name": "validate-with-schematron",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:validate-with-schematron",
            "terminals": [
                
	    {"name": "parameters", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "schema", "direction": [0,-1], "offsetPosition":{"left": 180, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} },
	    {"name": "report", "direction": [0,1], "offsetPosition":{"left": 140, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "phase", "name": "phase", "value": "#ALL" } },
	    {"type": "boolean", "inputParams": {"label": "assert-valid", "name": "assert-valid", "value": true } }
        ]
                }
    },
    {
        "name": "validate-with-xml-schema",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:validate-with-xml-schema",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "schema", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "boolean", "inputParams": {"label": "use-location-hints", "name": "use-location-hints", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "try-namespaces", "name": "try-namespaces", "value": false } },
	    {"type": "boolean", "inputParams": {"label": "assert-valid", "name": "assert-valid", "value": true } },
	    {"type": "select", "inputParams": {"label": "mode", "name": "mode", "value": "strict", "selectValues": ['strict', 'lax'] } }
        ]
                }
    },
    {
        "name": "www-form-urldecode",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:www-form-urldecode",
            "terminals": [
                
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "value", "name": "value", "required": "true" } }
        ]
                }
    },
    {
        "name": "www-form-urlencode",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:www-form-urlencode",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "parameters", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"inputParams": {"label": "match", "name": "match", "required": "true" } }
        ]
                }
    },
    {
        "name": "xquery",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:xquery",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "query", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "parameters", "direction": [0,-1], "offsetPosition":{"left": 180, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    
                }
    },
    {
        "name": "xsl-formatter",
        "container": {
            "xtype": "WireIt.FormContainer",
            "title": "p:xsl-formatter",
            "terminals": [
                
	    {"name": "source", "direction": [0,-1], "offsetPosition":{"left": 100, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "parameters", "direction": [0,-1], "offsetPosition":{"left": 140, "top": -15}, "ddConfig": { "type": "input", "allowedTypes": ["output"]} },
	    {"name": "result", "direction": [0,1], "offsetPosition":{"left": 100, "bottom": -15}, "ddConfig": { "type": "output", "allowedTypes": ["input"]} }
                ]
    , "fields": [
        
	    {"type": "url", "inputParams": {"label": "href", "name": "href", "required": "true" } },
	    {"inputParams": {"label": "content-type", "name": "content-type" } }
        ]
                }
    }
]
};
