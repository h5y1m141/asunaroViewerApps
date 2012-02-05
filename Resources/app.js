Ti.API.info(Titanium.Utils.sha1("obj"));
Ti.API.info(Ti.Filesystem.applicationDataDirectory);

var $$ = require('ui/styles');
var ui = require('ui/ui');
var tabGroup = Titanium.UI.createTabGroup();
var tab1 = Titanium.UI.createTab($$.prop.tab1);
var win1 = Titanium.UI.createWindow($$.prop.win);
win1.title = 'あすなろBLOG';
win1.tabBarHidden = true;
tab1.window = win1;
var jsondb = require('com.irlgaming.jsondb');
jsondb.debug(true);
var collection = jsondb.factory('asunaroblog:entries','orih6254');
var apiKey = '4f2ce007e4b024f14205b62e';
var hostname = 'api.mongolab.com';

collection.initializeAPI(hostname,apiKey);
collection.API.load();
Ti.App.addEventListener("JSONDBDownloadSuccess", function(event) {
  Ti.API.info(event);
  var rows = [];
  var entries = collection.find({});
  Ti.API.info('エントリ件数:'+ entries.length);
  for(var i=0;i<entries.length;i++){
    var entry = entries[i];

    var row = ui.createEntryRow(entry);
    rows.push(row);
  }
  var tableView = ui.createTableView(rows);
  win1.add(tableView);
});
Ti.App.addEventListener("JSONDBDownloadError", function(error) {
  Ti.API.info(error);
});


tabGroup.addTab(tab1);
tabGroup.open();

