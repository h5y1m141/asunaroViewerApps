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
    // alert(localCollection.count({blogger:{$eq:blogger}}));
    var count = localCollection.count({blogger:{$eq:blogger}});
    if(count >= 1){
      var entries = localCollection.find({
        blogger:{$eq:blogger}
      },{
        $limit:5
      });
      callback(entries);
    }else{
      self.loadFromMongoLab(blogger,callback);
    }

  },
  loadFromMongoLab:function(/* string */ blogger, /* function */callback){
    if(isConnected){
      var collection = jsondb.factory('asunaroblog:entries','orih6254');
      var self = this;
      collection.initializeAPI(hostname,apiKey);
      collection.API.load();
      Ti.App.addEventListener("JSONDBDownloadSuccess", function(event) {
        var entries = collection.find({
          blogger:{$eq:blogger}
        },{
          $limit:10
        });
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

    var localCollection = jsondb.factory('localJSONDB', 'asunaroblog');
    localCollection.save({
      permalink:entry.permalink,
      html_body:entry.html_body,
      blogger:entry.blogger,
      post_date:entry.post_date,
      title:entry.title
    });
    localCollection.ensureIndex({'post_date':1});
    localCollection.commit();
  },
  findLocalJSONDB:function(post_date,callback){
    var localCollection = jsondb.factory('localJSONDB', 'asunaroblog');
    var entries = localCollection.find({
      blogger:{$eq:'oyamada'},
      post_date:{$lt:post_date}
    },{
      $limit:5,
      $sort:{
        post_date:1
      }
    });
    for(var i=0;i<entries.length;i++){
      Ti.API.info(entries[i].title);
    }
    callback(sorted(entries));

  }
};

