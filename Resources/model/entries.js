function initJSONDB(){
  Ti.API.info(Titanium.Utils.sha1("obj"));
  Ti.API.info(Ti.Filesystem.applicationDataDirectory);

};
function isConnected(){
  if(Titanium.Network.online===true){
    return true;
  }
};
function sorted(entries){
  var _ = require('lib/underscore')._;
  var value = _.chain(entries)
      .sortBy(function(item) {return item.post_date; })
      .reverse()
      .value();
  return value;
}
var jsondb = require('com.irlgaming.jsondb');
jsondb.debug(true);
var apiKey = '4f2ce007e4b024f14205b62e';
var hostname = 'api.mongolab.com';

var exports = {
  load:function(/* string */ blogger, /* function */callback){
    initJSONDB();
    var self = this;
    var localCollection = jsondb.factory('localJSONDB', 'asunaroblog');
    alert(localCollection.count({blogger:{$eq:blogger}}));
    var count = localCollection.count({blogger:{$eq:blogger}});
    if(count >= 1){
      var entries = localCollection.find(
        {blogger:{$eq:blogger}},
        {$limit:20}
      );
      callback(sorted(entries));
    }else{
      self.loadFromMongoLab(callback);
    }

  },
  loadFromMongoLab:function(callback){
    if(isConnected){
      initJSONDB();
      var collection = jsondb.factory('asunaroblog:entries','orih6254');
      var self = this;
      collection.initializeAPI(hostname,apiKey);
      collection.API.load();
      Ti.App.addEventListener("JSONDBDownloadSuccess", function(event) {

        var entries = collection.find(
          {post_date:{$gt:'2006/10/01'}},
          {$limit:20}
        );
        var result = sorted(entries);
        for(var i=0;i<result.length;i++){
          self.save2LocalJSONDB(result[i]);
        }
        callback(result);
      });

      Ti.App.addEventListener("JSONDBDownloadError", function(error) {
        Ti.API.info(error);
        var dialog = Ti.UI.createAlertDialog({
          title: "サーバからエントリをダウンロード出来ませんでした。しばらくしてから再度ダウンロードしてみてください"
        });
        dialog.show();
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
    var localCollection = jsondb.factory('localJSONDB', 'asunaroblog');
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

