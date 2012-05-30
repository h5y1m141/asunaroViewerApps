var $$ = require('ui/styles').prop;

var exports = {
  init:function(option){
    var tableViewStyle = option||'tableView';
    Ti.API.info(tableViewStyle);
    var tableView = Ti.UI.createTableView($$[tableViewStyle]);

    return tableView;
  },
  createLoadOlderEntryRow:function(){
    var row = Ti.UI.createTableViewRow($$.loadOlderEntryRow);
    var label = Ti.UI.createLabel($$.reloadLabel);
    label.text= '過去のエントリを読み込む';
    row.add(label);
    row.addEventListener('click',function(e){
      myApps.controller.oldEntries();
    });
    return row;
  },
  createBloggerRow:function(/* json */ blogger){

    var bloggerRow = Ti.UI.createTableViewRow($$.bloggerRow);

    var bloggerIcon = Ti.UI.createImageView($$.bloggerIcon);
    bloggerIcon.image = '/ui/images/' + blogger.userid + '.gif';
    bloggerRow.add(bloggerIcon);

    var blogTitle = Ti.UI.createLabel($$.blogTitle);
    blogTitle.text = blogger.blogTitle;
    bloggerRow.add(blogTitle);

    bloggerRow.text = blogger.name;
    bloggerRow.addEventListener('click',function(e){
      var row = Ti.UI.createTableViewRow();
      var data = [];
      data.push(row);
      myApps.ui.mainTable.setData(data,{
        animated:false
      });
      myApps.controller.selectBlogger(blogger.userid);
    });
    return bloggerRow;
  },
  createComposeRow :function(){
    var composeRow = Ti.UI.createTableViewRow($$.composeRow);
    composeRow.showd = true;
    var mail = Ti.UI.createImageView($$.lightMailBtn);
    composeRow.add(mail);

    var readLater = Ti.UI.createImageView($$.lightTextBtn);
    composeRow.add(readLater);

    var star = Ti.UI.createImageView($$.lightStarBtn);
    composeRow.add(star);

    var tweet = Ti.UI.createImageView($$.lightCommentBtn);
    composeRow.add(tweet);

    return composeRow;

  },
  createEntryRow :function(/* JSON */ entry){

    var row = Ti.UI.createTableViewRow($$.viewRow);
    row.data = entry;
    row.addEventListener('click', function(e){
      var webViewElements = require('ui/webView').init(e.row.data.title,e.row.data.blogger,e.row.data.html_body);

      myApps.window.webView = require('ui/window').createEntryDetailWindow();
      myApps.window.webView.showNavBar();
      for(var i=0;i<webViewElements.length;i++){
        myApps.window.webView.add(webViewElements[i]);
      }

      var label = Ti.UI.createLabel({
        font:{
          fontSize:14
        },
        color:'#fff',
        width:60,
        height:30,
        textAlign:1,
        backgroundColor:'#222',
        borderWidth:1,
        borderRadius:5,
        text:'Back'

      });

      label.addEventListener('click',function(e){
        myApps.window.webView.close({
          transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN
        });
      });

      var toolBar = Ti.UI.iOS.createToolbar({
        items:[label],
        top:0,
        left:0,
        barColor:'#222',
        height:40,
        zIndex:10
      });
      myApps.window.webView.add(toolBar);
      myApps.window.webView.open({
        transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP
      });

      //myApps.tabGroup.activeTab.open(myApps.window.entry,{animated:true});
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

    var icon_iamge = Ti.UI.createImageView($$.iconImage);
    icon_iamge.image = '/ui/images/' + entry.blogger + '.gif';
    row.add(icon_iamge);

    var iconOverrap = Ti.UI.createView($$.iconOverrap);
    row.add(iconOverrap);

    // var underView = Ti.UI.createView($$.underView);
    // var twitterBtn = Ti.UI.createImageView($$.twitterBtn);
    // var tweetRTCount = Ti.UI.createLabel($$.tweetRTCount);

    // var hatebuBtn = Ti.UI.createImageView($$.hatebuBtn);
    // var hatebuCount = Ti.UI.createLabel($$.hatebuCount);
    // var facebookBtn = Ti.UI.createImageView($$.facebookBtn);
    // var facebookLikeCount = Ti.UI.createLabel($$.facebookLikeCount);
    // underView.add(twitterBtn);
    // underView.add(tweetRTCount);
    // underView.add(hatebuBtn);
    // underView.add(hatebuCount);
    // underView.add(facebookBtn);
    // underView.add(facebookLikeCount);
    // row.add(underView);

    row.className = entry.blogger;
    return row;
  }
};
