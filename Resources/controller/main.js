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
          animated:true,
          animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN
        });
      }
    });
  },
  updateEntries:function(){
    var startpage = myApps.ui.mainTable.data[0].rows[0].data.post_date;
    alert('start refresh. page is:'+startpage);
  }
};