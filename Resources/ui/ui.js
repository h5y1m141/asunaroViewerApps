
var exports = {
  tableView:function(){
    return tableView;
  },
  setTableData:function(/*array*/ data){
    return tableView.setData(data,{
      animated:true,
      animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN
    });
  },
  createEntryRow :function(/* JSON */ entry){
    var self = this;
    var row = Ti.UI.createTableViewRow($$.viewRow);
    row.data = entry;
    row.addEventListener('click', function(e){
      var webViewHeaderContainer = Ti.UI.createLabel($$.webViewHeaderContainer);
      var label = Ti.UI.createLabel($$.webViewLabel);
      label.text = e.row.data.title;

      var iconIamge = Ti.UI.createImageView($$.iconImage);
      iconIamge.image = '/ui/images/' + e.row.data.blogger + '.gif';

      var iconOverrap = Ti.UI.createView($$.iconOverrap);


      webViewHeaderContainer.add(iconIamge);
      webViewHeaderContainer.add(iconOverrap);
      webViewHeaderContainer.add(label);

      var EntryWin = self.showEntryWindow();
      EntryWin.add(webViewHeaderContainer);

      var w = myApps.webView.insertContents(e.row.data.html_body);
      EntryWin.add(w);
      tabGroup.activeTab.open(EntryWin,{animated:true});

    });
    Ti.include('lib/humanedates.js');
    var updateTime = Ti.UI.createLabel($$.updateTime);
    updateTime.text = humaneDate(entry.post_date);
    row.add(updateTime);

    var title = Ti.UI.createLabel($$.entry);
    title.text = entry.title,
    row.add(title);

    var entrySummary = Ti.UI.createLabel($$.entrySummary);
    entrySummary.text = entry.html_body.replace(/<\/?[^>]+>/gi, "");
    row.add(entrySummary);

    // var bloggerName = Ti.UI.createLabel($$.bloggerName);
    // bloggerName.text = entry.blogger;
    // row.add(bloggerName);

    var icon_iamge = Ti.UI.createImageView($$.iconImage);
    icon_iamge.image = '/ui/images/' + entry.blogger + '.gif';
    row.add(icon_iamge);

    var iconOverrap = Ti.UI.createView($$.iconOverrap);
    row.add(iconOverrap);

    row.className = entry.blogger;
    return row;
  },
  showEntryWindow:function(){
    var win = Titanium.UI.createWindow($$.entryWin);
    win.rightNavButton = (function(){
      var button = Titanium.UI.createButton($$.composeBtn);
      button.addEventListener('click', function() {
        // var twitter = require("/lib/twitter").util;
        // showPostWindow();
      });
      return button;
    })();
    win.leftNavButton = (function(){
      var button = Titanium.UI.createButton($$.backBtn);
      button.addEventListener('click', function() {
        win.close();
      });
      return button;
    })();
    win.tabBarHidden = true;
    // 以下はエントリ詳細画面のタイトル部分のUI
    return win;

  },
  createMainWindow :function(){
    var self = this;
    win.title = 'あすなろBLOG';
    win.rigthNavButton = (function(){
      var button = Titanium.UI.createButton($$.refreshBtn);
      button.addEventListener('click', function() {
        //
      });
      return button;
    })();

    tab1.window = win;
    tabGroup.addTab(tab1);
    tabGroup.open();
  },
  addElement:function(/* Ti.UI.View Object*/ element){
    return win.add(element);
  }
};

var $$ = require('ui/styles').prop;
var win = Titanium.UI.createWindow($$.win);
var tabGroup = Titanium.UI.createTabGroup();
var tab1 =Titanium.UI.createTab();
var tableView = Ti.UI.createTableView($$.tableView);
tableView.addEventListener('scrollEnd',function(){
  var last_index = tableView.data[0].rows.length - 1;
  //alert(last_index);
});
tableView.addEventListener('click', function(e){
  alert(e.index);
  alert(e.row.data.post_date);
});

// private method
function showPostWindow(){
  var $$ = require('ui/styles').prop;
  var tweetWindow = Titanium.UI.createWindow($$.tweetWindow);
  tweetWindow.barColor = "#000";
  var closeBtn = Titanium.UI.createButton($$.closeBtn);
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

function insertWebViewContents(/* string */ contents){
  var webView = Ti.UI.createWebView($$.webView);
  webView.html = '<html><head><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"></head>'
      +'<body>'
      + contents
      + '</body></html>';
  return webView;
}
