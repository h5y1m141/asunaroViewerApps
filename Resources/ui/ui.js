var exports = {
  createBloggerRow:function(/* json */ blogger){

    var row = Ti.UI.createTableViewRow($$.bloggerRow);
    var switchBtn = Ti.UI.createSwitch($$.switchBtn);
    switchBtn.blogger = blogger.name;
    switchBtn.addEventListener('change',function(e){
      Ti.API.info('Switch value = ' + e.value
                  + ' act val ' + switchBtn.blogger);
    });

    row.add(switchBtn);
    row.text = blogger.name;
    return row;

  },
  createComposeRow :function(){
    var row = Ti.UI.createTableViewRow({
      width:'auto',
      borderWidth:1,
      backgroundColor:'#898989',
      height:40
    });
    row.showd = true;
    var mail = Ti.UI.createImageView($$.lightMailBtn);
    mail.image = '/ui/parts/light_mail.png';
    row.add(mail);

    var readLater = Ti.UI.createImageView($$.lightTextBtn);
    readLater.image = '/ui/parts/light_text.png';
    row.add(readLater);

    var star = Ti.UI.createImageView($$.lightStarBtn);
    star.image = '/ui/parts/light_star.png';
    row.add(star);

    var tweet = Ti.UI.createImageView($$.lightCommentBtn);
    tweet.image = '/ui/parts/light_comment.png';
    row.add(tweet);

    return row;

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
      iconIamge.backgroundColor = '#cbcbcb';
      webViewHeaderContainer.add(iconIamge);
      webViewHeaderContainer.add(label);

      var EntryWin = self.showEntryWindow();
      EntryWin.add(webViewHeaderContainer);
      var webView = Ti.UI.createWebView($$.webView);

      // prepare css for iphone
      var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'ui/html/main.css');
      var css = file.read();
      var htmlHeaderElement = '<html><head><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"><style type="text/css">'+ css + '</style></head>';

      webView.html = htmlHeaderElement
        +'<body>'
        + e.row.data.html_body
        + '</body></html>';

      EntryWin.add(webView);
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

    var underView = Ti.UI.createView({
      top:75,
      left:75,
      width:200,
      height:25
    });
    var twitterBtn = Ti.UI.createImageView({
      width:20,
      height:20,
      top:0,
      left:10,
      image:'/ui/parts/icon_twitter.png'
    });
    var tweetRTCount = Ti.UI.createLabel({
      width:40,
      height:20,
      top:0,
      left:40,
      color:"#898989",
      font:{
        fontSize:12
      },
      text:"30"
    });

    var hatebuBtn = Ti.UI.createImageView({
      width:20,
      height:20,
      top:0,
      left:90,
      image:'/ui/parts/icon_hatena.png'
    });
    var hatebuCount = Ti.UI.createLabel({
      width:40,
      height:20,
      top:0,
      left:120,
      color:"#898989",
      font:{
        fontSize:12
      },
      text:'200'
    });
    var facebookBtn = Ti.UI.createImageView({
      width:20,
      height:20,
      top:0,
      left:170,
      image:'/ui/parts/icon_facebook.png'
    });
    var facebookLikeCount = Ti.UI.createLabel({
      width:40,
      height:20,
      top:0,
      left:200,
      color:"#898989",
      font:{
        fontSize:12
      },
      text:'200'
    });
    underView.add(twitterBtn);
    underView.add(tweetRTCount);
    underView.add(hatebuBtn);
    underView.add(hatebuCount);
    underView.add(facebookBtn);
    underView.add(facebookLikeCount);
    row.add(underView);

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

    win.title = 'あすなろBLOG';
    win.rightNavButton = (function(){
      var button = Titanium.UI.createButton($$.refreshBtn);
      button.addEventListener('click', function() {
      });
      return button;
    })();

    win.leftNavButton = (function(){
      var button = Titanium.UI.createButton($$.listBtn);
      button.addEventListener('click', function() {
      Ti.API.info(myApps.uiparts.mainTable.moved);
      if(!myApps.uiparts.mainTable.moved){
        myApps.uiparts.mainTable.animate({
          duration:180,
          left:200
        });
        myApps.uiparts.mainTable.moved = true;
      }else{
        myApps.uiparts.mainTable.animate({
          duration:180,
          left:0
        });
        myApps.uiparts.mainTable.moved = false;
      }

      });
      return button;
    })();
    //win.open();
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
  // alert(e.index);
  // alert(e.row.data.post_date);
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

