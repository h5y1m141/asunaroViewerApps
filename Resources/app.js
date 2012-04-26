var myApps = {};
myApps._ = require('lib/underscore')._;
myApps.ui = {};
myApps.ui.util = require('ui/ui');
myApps.ui.util.tableView = require('ui/tableView');
myApps.ui.util.webView = require('ui/webView');
myApps.ui.mainTable = myApps.ui.util.tableView.init('tableView');
myApps.entries = require('model/entries');
myApps.contoller = require('controller/main');


(function(){
  var blogger = 'uehara';
  myApps.contoller.selectBlogger(blogger);
  myApps.ui.webView = myApps.ui.util.webView.init();
  myApps.ui.util.addElement(myApps.ui.mainTable);

  // TableView for blogger info
  myApps.bloggers = require('model/bloggers').data;
  myApps.ui.bloggerTable = myApps.ui.util.tableView.init('bloggerTable');
  for(var i=0;i<myApps.bloggers.length;i++){
    var row = myApps.ui.util.createBloggerRow(myApps.bloggers[i]);
    myApps.ui.bloggerTable.appendRow(row,{
        animated:false
    });
  }
  myApps.ui.util.addElement(myApps.ui.bloggerTable);
  myApps.ui.util.addElement(myApps.ui.webView);

  myApps.ui.util.createMainWindow();

}).call(this);

