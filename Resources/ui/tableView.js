var $$ = require('ui/styles').prop;


var exports = {
  init:function(option){
    var tableViewStyle = option||tableView;
    var tableView = Ti.UI.createTableView($$[tableViewStyle]);

    tableView.addEventListener('click',function(e){
      // var index = e.index;
      // var row = myApps.ui.createComposeRow();
      // row.rowNum =  index;
      // myApps.ui.mainTable.insertRowAfter(index,row,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN});
      // row.addEventListener('click',function(e){
      //   myApps.ui.mainTable.deleteRow(index+1,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.UP});
      // });

    });
    tableView.addEventListener('scrollEnd',function(e){
      var last_index = tableView.data[0].rows.length - 1;
      var post_date = tableView.data[0].rows[last_index].data.post_date;

      myApps.entries.findLocalJSONDB(post_date,function(cached){

        for(var i=0;i<cached.length;i++){
          var rows = [];
          var entry = cached[i];
          Ti.API.info('読み込まれたエントリタイトル：'+cached[i].title);
          var row = myApps.ui.util.createEntryRow(entry);
          tableView.appendRow(row,{
            animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN
          });
        }
      });
    });
    return tableView;
  }
};
