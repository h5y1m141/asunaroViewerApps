var myApps = {};
myApps.ui = require('ui/ui');
myApps.webView = require('ui/webView');
myApps.tableView = require('ui/tableView');
myApps.entries = require('model/entries');
(function(){
  var _ = require('lib/underscore')._;
  var entries;
  myApps.entries.load('oyamada',function(entries){
    var rows = [];
    for(var i=0;i<entries.length;i++){
      var entry = entries[i];
      Ti.API.info(entries[i]);
      var row = myApps.ui.createEntryRow(entry);
      rows.push(row);
      myApps.tableView.setTableData(rows);
    }
  });

  myApps.ui.addElement(myApps.tableView.init());
  myApps.ui.addElement(myApps.webView.init());
  myApps.ui.createMainWindow();

}).call(this);

