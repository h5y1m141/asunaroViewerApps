var exports = {
  createEntryRow:function(/* JSON */ entry){
    var row = Ti.UI.createTableViewRow($$.prop.viewRow);
    row.data = entry;
    row.addEventListener('click', function(e){
      var win = Titanium.UI.createWindow($$.prop.entryWin);
      win.rightNavButton = (function(){
        var button = Titanium.UI.createButton($$.prop.navBtn);
	button.addEventListener('click', function() {
          var twitter = require("/lib/twitter").util;
          showPostWindow();
	});
	return button;
      })();

      // 以下はエントリ詳細画面のタイトル部分のUI
      var webViewHeaderContainer = Ti.UI.createLabel($$.prop.webViewHeaderContainer);

      var label = Ti.UI.createLabel($$.prop.webViewLabel);
      label.text = e.row.data.title;

      var iconIamge = Ti.UI.createImageView($$.prop.iconImage);
      iconIamge.image = '/ui/images/' + e.row.data.blogger + '.gif';


      webViewHeaderContainer.add(iconIamge);
      webViewHeaderContainer.add(label);

      win.add(webViewHeaderContainer);

      // 以下はエントリ本文のUI
      var webViewBody = Ti.UI.createView($$.prop.webViewBody);
      var webView = Ti.UI.createWebView($$.prop.webView);
      webView.html = '<html><head><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"></head><body>'
      + e.row.data.html_body
      + '</body></html>';
      //webViewBody.add(webView);
      win.add(webView);
      tabGroup.activeTab.open(win,{animated:true});

    });
    var title = Ti.UI.createLabel($$.prop.entry);
    title.text = entry.title,
    row.add(title);

    var entrySummary = Ti.UI.createLabel($$.prop.entrySummary);
    entrySummary.text = entry.html_body.replace(/<\/?[^>]+>/gi, "");
    row.add(entrySummary);

    var bloggerName = Ti.UI.createLabel($$.prop.bloggerName);
    bloggerName.text = entry.blogger;
    row.add(bloggerName);

    var icon_iamge = Ti.UI.createImageView($$.prop.iconImage);
    icon_iamge.image = '/ui/images/' + entry.blogger + '.gif';

    row.add(icon_iamge);
    return row;
  },
  createTableView:function(/* array */ rows){
    var tableView = Ti.UI.createTableView($$.tableView);
    var len = rows.length;
    for(var i=0;i<len;i++){
      tableView.appendRow(rows[i]);
    }
    // tableView.addEventListener('click',function(e){
    //   var index = e.index;
    // });

    return tableView;
  }
};

// private method

function showPostWindow(){
  var tweetWindow = Titanium.UI.createWindow($$.prop.tweetWindow);
  tweetWindow.barColor = "#000";
  var closeBtn = Titanium.UI.createButton($$.prop.closeBtn);
  closeBtn.addEventListener('click',function(){
    tweetWindow.close();
  });
  tweetWindow.leftNavButton = closeBtn;
  tweetWindow.open({
    modal:true,
    modalTransionStyle:Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL,
    modalStyle:Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
  });
  return tweetWindow;
}