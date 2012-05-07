var jsondb = require('com.irlgaming.jsondb');
jsondb.debug(true);

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
      self.loadFromSakura(blogger,callback);
    }
  },
  loadFromSakura:function(/* string */ blogger, /* function */callback){
    if(isConnected){
      var xhr = Ti.Network.createHTTPClient();
      var url = "http://h5y1m141.info/entry/" + blogger + "/page/0";
      xhr.open('GET',url);
      xhr.onload = function(){
        var res = JSON.parse(this.responseText);
        var result = sorted(res);
        var localCollection = jsondb.factory('localJSONDB', 'asunaroblog');
        for(var i=0;i<result.length;i++){
          localCollection.save({
            permalink:result[i].permalink,
            html_body:result[i].html_body,
            blogger:result[i].blogger,
            post_date:result[i].post_date,
            title:result[i].title
          });
          localCollection.ensureIndex({'post_date':1});
          localCollection.commit();
        }
        callback(result);
      };
      xhr.error = function(){
        var dialog = Ti.UI.createAlertDialog({
          title: "ネットワーク接続エラー",
          message: "ネットワーク接続が確立されていません。再度お試しください"
        });
        dialog.show();
      };
      xhr.send();
    }else{
      var dialog = Ti.UI.createAlertDialog({
        title: "ネットワーク接続できていません"
      });
      dialog.show();
    }

  },
  findLocalJSONDB:function(blogger,callback){
    var localCollection = jsondb.factory('localJSONDB', 'asunaroblog');
    var entries = localCollection.find({
      blogger:{$eq:blogger}
    },{
      // $limit:5,
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
// private method

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