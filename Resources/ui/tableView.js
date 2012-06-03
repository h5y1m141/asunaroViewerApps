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

    return bloggerRow;
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

      var doneBtn = Titanium.UI.createButton($$.doneBtn);
      doneBtn.addEventListener('click',function(e){
        myApps.window.webView.close({
          transition:Titanium.UI.iPhone.AnimationStyle.CURL_DOWN
        });
      });

      var toolBar = Ti.UI.iOS.createToolbar({

        items:[doneBtn],
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

    // var icon_iamge = Ti.UI.createImageView($$.iconImage);
    // icon_iamge.image = '/ui/images/' + entry.blogger + '.gif';
    // row.add(icon_iamge);

    // var iconOverrap = Ti.UI.createView($$.iconOverrap);
    // row.add(iconOverrap);

    row.className = entry.blogger;
    return row;
  }
};
