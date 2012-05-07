var $$ = require('ui/styles').prop;


var exports = {
  init:function(option){
    var self = this;
    var tableViewStyle = option||'tableView';
    Ti.API.info(tableViewStyle);
    var tableView = Ti.UI.createTableView($$[tableViewStyle]);
    // エントリ一覧用のTableViewを生成する際には過去のエントリ情報を
    // 読み込む処理が必要になるためイベントリスナーを設定
    if(tableViewStyle==='tableView'){
      tableView.addEventListener('scrollEnd',function(e){

        var last_index = tableView.data[0].rows.length - 1;
        var blogger = tableView.data[0].rows[last_index].data.blogger;

        myApps.entries.findLocalJSONDB(blogger,function(cached){

          for(var i=0;i<cached.length;i++){
            var entry = cached[i];
            Ti.API.info('読み込まれたエントリタイトル：'+cached[i].title);
            var row = self.createEntryRow(entry);
            tableView.appendRow(row,{
              animated:false
            });
          }
        });

      });
    }
    return tableView;
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
      myApps.contoller.selectBlogger(blogger.userid);

      myApps.ui.mainTable.animate({
        duration:180,
        left:5
      });
      myApps.ui.mainTable.moved = false;
      myApps.ui.webView.hide();
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
      // prepare css for iphone
      var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, '/ui/html/main.css');
      var css = file.read();
      var htmlHeaderElement = '<html><head><meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"><style type="text/css">'+ css + '</style></head>';

      myApps.ui.webView.html = htmlHeaderElement
        +'<body>'
        + e.row.data.html_body
        + '</body></html>';
      myApps.ui.webView.show();
      EntryWin.add(myApps.ui.webView);
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

    var underView = Ti.UI.createView($$.underView);
    var twitterBtn = Ti.UI.createImageView($$.twitterBtn);
    var tweetRTCount = Ti.UI.createLabel($$.tweetRTCount);

    var hatebuBtn = Ti.UI.createImageView($$.hatebuBtn);
    var hatebuCount = Ti.UI.createLabel($$.hatebuCount);
    var facebookBtn = Ti.UI.createImageView($$.facebookBtn);
    var facebookLikeCount = Ti.UI.createLabel($$.facebookLikeCount);
    underView.add(twitterBtn);
    underView.add(tweetRTCount);
    underView.add(hatebuBtn);
    underView.add(hatebuCount);
    underView.add(facebookBtn);
    underView.add(facebookLikeCount);
    row.add(underView);

    row.className = entry.blogger;
    return row;
  }
};
