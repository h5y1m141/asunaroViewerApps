var myApps = {};
myApps.ui = {};
myApps.window = {};
myApps.tabGroup = Titanium.UI.createTabGroup();
myApps.window.main = require('ui/window').createMainWindow();
myApps.window.entry = require('ui/window').createEntryWindow();
myApps.tableView = require('ui/tableView');
myApps.webView = require('ui/webView');
myApps.ui.mainTable = myApps.tableView.init('tableView');
myApps.entries = require('model/entries');
myApps.contoller = require('controller/main');

myApps.ui.actInd = Titanium.UI.createActivityIndicator({
  zIndex:10,
  top:50,
  height:55,
  width:'auto',
  backgroundColor:'#000',
  color:'#fff',
  font:{fontFamily:'Helvetica Neue',fontSize:13},
  message:'Loading...',
  style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
});


(function(){
  var blogger = 'uehara';
  myApps.contoller.selectBlogger(blogger);
  myApps.ui.webView = myApps.webView.init();
  myApps.window.main.add(myApps.ui.mainTable);

  // TableView for blogger info
  myApps.bloggers = require('model/bloggers').data;
  myApps.ui.bloggerTable = myApps.tableView.init('bloggerTable');
  for(var i=0;i<myApps.bloggers.length;i++){
    var row = myApps.tableView.createBloggerRow(myApps.bloggers[i]);
    myApps.ui.bloggerTable.appendRow(row,{
        animated:false
    });
  }


  myApps.window.main.add(myApps.ui.bloggerTable);
  myApps.window.main.add(myApps.ui.webView);
  myApps.window.main.add(myApps.ui.actInd);
  var tab1 =Titanium.UI.createTab();
  tab1.window = myApps.window.main;
  myApps.tabGroup.addTab(tab1);
  myApps.tabGroup.open();


}).call(this);

