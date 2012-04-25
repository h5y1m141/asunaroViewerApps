var $$ = require('ui/styles').prop;

var webView = Ti.UI.createWebView($$.webView);
var exports = {
  init:function(){
    webView.html = '<body>hello! this is a sample'
        + '</body></html>';
    webView.hide();
    return webView;
  }
};
