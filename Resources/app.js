var myApps = {};
myApps.uiparts = {};
myApps.ui = require('ui/ui');
myApps.ui.tableView = require('ui/tableView');
myApps.uiparts.webView = require('ui/webView');
myApps.entries = require('model/entries');
(function(){

  var entries;
  myApps.entries.load('oyamada',function(entries){
    myApps.uiparts.mainTable = myApps.ui.tableView.init('tableView');
    var rows = [];
    for(var i=0;i<entries.length;i++){
      var entry = entries[i];

      var row = myApps.ui.createEntryRow(entry);
      rows.push(row);
      myApps.ui.tableView.setTableData(myApps.uiparts.mainTable,rows);
    }
  });
  myApps.ui.addElement(myApps.uiparts.mainTable);
  myApps.ui.addElement(myApps.uiparts.webView.init());
  myApps.ui.createMainWindow();

}).call(this);

