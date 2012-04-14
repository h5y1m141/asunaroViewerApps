var myApps = {};
myApps.ui = require('ui/ui');
myApps.entries = require('model/entries');
(function(){
  var _ = require('lib/underscore')._;
  var entries;
  myApps.entries.load('uehara',function(entries){
    var rows = [];
    for(var i=0;i<entries.length;i++){
      var entry = entries[i];
      Ti.API.info(entries[i]);
      var row = myApps.ui.createEntryRow(entry);
      rows.push(row);
      myApps.ui.setTableData(rows);
    }
  });

  myApps.ui.addElement(myApps.ui.tableView());
  myApps.ui.createMainWindow();

}).call(this);

