var myApps = {};
myApps.ui = {};
myApps.ui.util = require('ui/ui');
myApps.ui.util.tableView = require('ui/tableView');
myApps.entries = require('model/entries');

(function(){

  var entries;
  myApps.entries.load('oyamada',function(entries){
    myApps.ui.mainTable = myApps.ui.util.tableView.init('tableView');
    var rows = [];
    for(var i=0;i<entries.length;i++){
      var entry = entries[i];

      var row = myApps.ui.util.createEntryRow(entry);
      rows.push(row);
      myApps.ui.mainTable.setData(rows,{
        animated:true,
        animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN
      });
    }
  });
  //alert("//"+Titanium.Filesystem.resourcesDirectory+"/main.css");
  myApps.ui.util.addElement(myApps.ui.mainTable);

  myApps.ui.util.createMainWindow();

}).call(this);

