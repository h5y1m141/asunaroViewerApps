function initJSONDB(){
  Ti.API.info(Titanium.Utils.sha1("obj"));
  Ti.API.info(Ti.Filesystem.applicationDataDirectory);

};
function isConnected(){
  if(Titanium.Network.online===true){
    return true;
  }
};
var jsondb = require('com.irlgaming.jsondb');
jsondb.debug(true);
var apiKey = '4f2ce007e4b024f14205b62e';
var hostname = 'api.mongolab.com';

var exports = {
  loadFromMongoLab:function(callback){
    if(isConnected){
      initJSONDB();
      var collection = jsondb.factory('asunaroblog:entries','orih6254');
      var self = this;
      collection.initializeAPI(hostname,apiKey);
      collection.API.load();
      Ti.App.addEventListener("JSONDBDownloadSuccess", function(event) {
        Ti.API.info(event.collection_name);
        var entries = collection.find({}, {$sort:{postdate:1}});
        Ti.API.info(entries);
        for(var i=0;i<entries.length;i++){
          self.save2LocalJSONDB(entries[i]);
        }
        callback(entries);
      });
      Ti.App.addEventListener("JSONDBDownloadError", function(error) {
        Ti.API.info(error);
      });
    }else{
      var dialog = Ti.UI.createAlertDialog({
        title: "ネットワーク接続できていません"
      });
      dialog.show();
    }
  },
  save2LocalJSONDB:function(/*json */ entry){
    initJSONDB();
    var localCollection = jsondb.factory('localDB', 'asunaroblog');
    localCollection.save({
      permalink:entry.permalink,
      html_body:entry.html_body,
      blogger:entry.blogger,
      post_date:entry.post_date,
      title:entry.title
    });
    localCollection.commit();
  }
};

