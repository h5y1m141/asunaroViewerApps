var myApps = {};
myApps.ui = {};
myApps.window = {};
myApps.window.main = require('ui/window').createMainWindow();
myApps.window.entry = require('ui/window').createEntryWindow();
myApps.tableView = require('ui/tableView');
myApps.webView = require('ui/webView');
myApps.ui.mainTable = myApps.tableView.init('tableView');

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

  myApps.bloggers = require('model/bloggers').data;

  myApps.ui.bloggerTable = myApps.tableView.init('bloggerTable');
  for(var i=0;i<myApps.bloggers.length;i++){
    var row = myApps.tableView.createBloggerRow(myApps.bloggers[i]);
    row.userid = myApps.bloggers[i].userid;
    row.addEventListener('click',function(e){
      var blogger = e.row.userid;
      myApps.contoller.selectBlogger(blogger);
      myApps.window.entry.add(myApps.ui.mainTable);
      var toolBar = Titanium.UI.iOS.createToolbar({
        top:0,
        left:0,
        barColor:'#7a7a7a',
        height:40,
        zIndex:10
      });
      myApps.window.entry.add(toolBar);
      myApps.window.entry.open({
        transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
      });
    });

    myApps.ui.bloggerTable.appendRow(row,{
        animated:false
    });
  }

  myApps.window.main.add(myApps.ui.bloggerTable);
  myApps.window.main.add(myApps.ui.actInd);
  myApps.window.main.open();


}).call(this);

