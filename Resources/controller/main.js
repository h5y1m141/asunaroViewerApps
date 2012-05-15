var exports = {
  routing:function(){
    var data = {
      hasCache:'dd',
      latest:''
    };
  },
  selectBlogger:function(/* string */ blogger){
    myApps.entries.load(blogger,function(entries){

      var rows = [];
      for(var i=0;i<entries.length;i++){
        var entry = entries[i];

        var row = myApps.tableView.createEntryRow(entry);
        rows.push(row);
        myApps.ui.mainTable.setData(rows,{
          animated:true
        });
      }
    });
  },
  updateEntries:function(){
    var lastupdate = convertDataFormat(myApps.ui.mainTable.data[0].rows[0].data.post_date);
    var blogger = myApps.ui.mainTable.data[0].rows[0].data.blogger;
    Ti.API.info('start'+lastupdate);
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
  用途：サーバ側のAPIは/entry/{blogger}/{unixタイム}としてるため
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
