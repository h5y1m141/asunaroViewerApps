myApps.entries = require('model/entries');
var exports = {
  selectBlogger:function(/* string */ blogger){
    myApps.entries.load(blogger,function(entries){
      var rows = [];
      for(var i=0;i<entries.length;i++){
        var entry = entries[i];
        var row = myApps.tableView.createEntryRow(entry);
        rows.push(row);

      }
      myApps.ui.actInd.hide();
      // エントリが1件以上読みこまれていたらローカルのキャッシュから
      // 読み込めるようにボタンを配置する
      if(entries.length>=1){
        var loadOlderEntryRow = myApps.tableView.createLoadOlderEntryRow();
        rows.push(loadOlderEntryRow);
      }

      myApps.ui.mainTable.setData(rows,{
          animated:false
      });

    });
  },
  latestEntries:function(){
    var blogger = myApps.ui.mainTable.data[0].rows[0].data.blogger;
    myApps.entries.loadLatest(blogger,function(entries){
      for(var i=0;i<entries.length;i++){
        var entry = entries[i];
        var row = myApps.tableView.createEntryRow(entry);
        myApps.ui.mainTable.insertRowBefore(0,row,{
          animated:true,
          animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN
        });
      }
      myApps.ui.actInd.hide();
    });
  },
  oldEntries:function(){
    var last_index = myApps.ui.mainTable.data[0].rows.length - 2;
    var baseDate = convertDataFormat(myApps.ui.mainTable.data[0].rows[last_index].data.post_date);

    var blogger = myApps.ui.mainTable.data[0].rows[0].data.blogger;
    myApps.entries.loadOldEntry(blogger,baseDate,function(entries){
      // 古いエントリを読み込んだ場合、配列の先頭に一番最新のエントリが
      // 格納されているためそのまま順番に処理をしてTableViewの末尾に
      // 追記すると意図した順番にならないため並べかえが必須
      var result = entries.reverse();
      for(var i=0;i<result.length;i++){
        var entry = result[i];

        var row = myApps.tableView.createEntryRow(entry);
        myApps.ui.mainTable.insertRowAfter(last_index,row,{
          animated:false
        });
      }
      myApps.ui.actInd.hide();
    });
  },
  updateEntries:function(){
    var lastupdate = convertDataFormat(myApps.ui.mainTable.data[0].rows[0].data.post_date);
    var blogger = myApps.ui.mainTable.data[0].rows[0].data.blogger;

    myApps.entries.loadLastUpdateEntry(blogger,lastupdate,function(entries){
      for(var i=0;i<entries.length;i++){
        var entry = entries[i];
        Ti.API.info('count is:'+i+ entries[i].title);
        var row = myApps.tableView.createEntryRow(entry);
        myApps.ui.mainTable.insertRowBefore(0,row,{
          animated:true,
          animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN
        });
      }
      myApps.ui.actInd.hide();
    });
  }
};

/*
  convertDataFormat
  用途：サーバ側のAPIは/entry/{blogger}/lastupdate/{unixタイム}としてるため
  yyyy/mm/dd hh:mm:ssフォーマットの日付を変換する必要あるため
  そのためのメソッド

  注意点:Javascriptのnew Date()を実行すると、UNIXTIME & ミリ秒と
  なっているみたい。そのため得られる結果に対してミリ秒の部分
  を切り落とす必要あり
*/

function convertDataFormat(post_date){
  var _date = new Date(post_date);
  return _date.getTime()/1000;
}
