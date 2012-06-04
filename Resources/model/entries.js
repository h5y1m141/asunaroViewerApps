var jsondb = require('com.irlgaming.jsondb');
jsondb.debug(true);

var exports = {
  load:function(/* string */ blogger, /* function */callback){
    var self = this;
    initJSONDB();
    myApps.ui.actInd.show();
    var localCollection = jsondb.factory('localJSONDB', 'blogDB');
    var cached = localCollection.find({blogger:{$eq:blogger}});
    Ti.API.info('number of entry is:'+ cached.length);
    if(cached.length >= 1){
      var entries = localCollection.find({
        blogger:{$eq:blogger}
      },{
        $sort:{post_date:-1}
      });
      callback(entries);
    }else{
      self.loadLatest(blogger,callback);
    }
  },
  loadLatest:function(/* string */ blogger, /* function */callback){

    // 2033-05-18 12:33:20 +0900(unixitmeだと2000000000 ) よりも最新エントリは存在しないので
    // 決め打ち
    var url = "http://asunaroblog.info/entry/" + blogger + "/date/older/2000000000";
    httpClient(url,callback);

  },
  loadLastUpdateEntry:function(/* string */ blogger,/* date */ lastupdate, /* function */callback){
    var url = "http://asunaroblog.info/entry/" + blogger + "/date/newer/" + lastupdate;
    Ti.API.info('loadLastUpdateEntry' + url);
    httpClient(url,callback);

  },
  loadOldEntry:function(/* string */ blogger,/* date */ baseDate, /* function */callback){
    var url = "http://asunaroblog.info/entry/" + blogger + "/date/older/" + baseDate;
    httpClient(url,callback);
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

function httpClient(url,callback){
  if(Titanium.Network.online===true){
    var xhr = Ti.Network.createHTTPClient();
    xhr.open('GET',url);
    xhr.onload = function(){
      if(this.responseText=='<h1>Internal Server Error</h1>'){
        var dummy = [];
        callback(dummy);
      }else{
        var res = JSON.parse(this.responseText);
        var result = sorted(res);
        var localCollection = jsondb.factory('localJSONDB', 'blogDB');
        for(var i=0;i<result.length;i++){

          var localCache = localCollection.find({
            permalink:{$eq:result[i].permalink}
          });

          if(localCache.length >=1){
            Ti.API.info('entry title '+result[i].title+ 'already stored');
          }else{
            localCollection.save({
              permalink:result[i].permalink,
              html_body:result[i].html_body,
              blogger:result[i].blogger,
              post_date:result[i].post_date,
              title:result[i].title
            });
            localCollection.ensureIndex({'post_date':1});
            localCollection.commit();
            Ti.API.info('stored cache!! entry title is:'+result[i].title);
          }
        }
        callback(result);
      }

    };
    xhr.error = function(){
      var dialog = Ti.UI.createAlertDialog({
        title: "ネットワーク接続エラー",
        message: "ネットワーク接続が確立されていません。再度お試しください"
      });
      dialog.show();
      myApps.ui.actInd.hide();
    };
    xhr.send();
  }else{
    var dialog = Ti.UI.createAlertDialog({
      title: "ネットワーク接続できていません"
    });
    dialog.show();
    myApps.ui.actInd.hide();
  }
}