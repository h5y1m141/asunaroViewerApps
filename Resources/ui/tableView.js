var $$ = require('ui/styles').prop;
var tableView = Ti.UI.createTableView($$.tableView);

var exports = {
  init:function(){
    var self = this;
    tableView.addEventListener('click',function(e){
      alert(e.index);
      alert(e.row.data.post_date);
    });
    tableView.addEventListener('scrollEnd',function(e){
      var last_index = tableView.data[0].rows.length - 1;
      var post_date = tableView.data[0].rows[last_index].data.post_date;

      myApps.entries.findLocalJSONDB(post_date,function(cached){

        for(var i=0;i<cached.length;i++){
          var rows = [];
          var entry = cached[i];
          Ti.API.info('読み込まれたエントリタイトル：'+cached[i].title);
          var row = myApps.ui.createEntryRow(entry);
          tableView.appendRow(row,{
            animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN
          });
        }
      });
    });
    return tableView;
  },

  setTableData:function(/*array*/ data){
    return tableView.setData(data,{
      animated:true,
      animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN
    });
  }
};
