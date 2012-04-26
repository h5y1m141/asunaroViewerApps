var exports = {
  selectBlogger:function(/* string */ blogger){
    myApps.entries.load(blogger,function(entries){

      var rows = [];
      for(var i=0;i<entries.length;i++){
        var entry = entries[i];

        var row = myApps.ui.util.createEntryRow(entry);
        rows.push(row);
        myApps.ui.mainTable.setData(rows,{
          animated:true,
          animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN
        });
      }
    });
  }
};