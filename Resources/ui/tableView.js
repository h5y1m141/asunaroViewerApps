var $$ = require('ui/styles').prop;


var exports = {
  init:function(option){
    var tableViewStyle = option||'tableView';
    Ti.API.info(tableViewStyle);
    var tableView = Ti.UI.createTableView($$[tableViewStyle]);
    // エントリ一覧用のTableViewを生成する際には過去のエントリ情報を
    // 読み込む処理が必要になるためイベントリスナーを設定
    if(tableViewStyle==='tableView'){
      tableView.addEventListener('scrollEnd',function(e){

        var last_index = tableView.data[0].rows.length - 1;
        var blogger = tableView.data[0].rows[last_index].data.blogger;

        myApps.entries.findLocalJSONDB(blogger,function(cached){

          for(var i=0;i<cached.length;i++){
            var entry = cached[i];
            Ti.API.info('読み込まれたエントリタイトル：'+cached[i].title);
            var row = myApps.ui.util.createEntryRow(entry);
            tableView.appendRow(row,{
              animated:false
            });
          }
        });

      });
    }
    return tableView;
  }
};
