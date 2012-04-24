var $$ = require('ui/styles').prop;
var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'main.css');
var css = file.read();
var htmlHeaderElement = '<html><head><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"><style type="text/css">'+ css + '</style></head>';



var webView = Ti.UI.createWebView($$.webView);
var exports = {
  init:function(){
    alert(htmlHeaderElement);
    webView.html = htmlHeaderElement
      +'<body>hello'
      + '</body></html>';
    return true;
  },
  insertContents:function(body){
    webView.html = htmlHeaderElement
        +'<body>'
        + body
        + '</body></html>';

  }
};
