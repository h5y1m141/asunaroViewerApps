var $$ = require('ui/styles').prop;
var webView = Ti.UI.createWebView($$.webView);
var htmlHeaderElement = '<html><head><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"></head>';
var exports = {
  init:function(){
    webView.html = htmlHeaderElement
      +'<body>'
      + '</body></html>';
    webView.hide();
    return webView;
  },
  insertContents:function(body){
    webView.html = htmlHeaderElement
        +'<body>'
        + body
        + '</body></html>';
    webView.show();
    return webView;
  }
};
