
var exports = {
  init:function(/* String */title,/* String */blogger,/* String */html_body){
    // ここからエントリ詳細画面上部のラベル要素の生成
    var $$ = require('ui/styles').prop;
    var label = Ti.UI.createLabel($$.webViewLabel);
    label.text = title;

    var iconIamge = Ti.UI.createImageView($$.iconImage);
    iconIamge.image = '/ui/images/' + blogger + '.gif';
    iconIamge.backgroundColor = '#cbcbcb';

    var webViewHeaderContainer = Ti.UI.createLabel($$.webViewHeaderContainer);
    webViewHeaderContainer.add(iconIamge);
    webViewHeaderContainer.add(label);


    var container = [];
    container.push(webViewHeaderContainer);


    // ここからエントリ情報を表示するためのWebView生成
    var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, '/ui/html/main.css');// prepare css for iphone
    var css = file.read();
    var htmlHeaderElement = '<html><head><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"><style type="text/css">'+ css + '</style></head>';

    var webView = Ti.UI.createWebView($$.webView);
    webView.html = htmlHeaderElement
        +'<body>'
        + html_body
        + '</body></html>';
    // webView.addEventListener('beforeload',function(e){
    //   myApps.ui.actInd.show();
    // });
    // webView.addEventListener('load',function(e){
    //   myApps.ui.actInd.hide();
    // });

    container.push(webView);
    return container;
  }
};
