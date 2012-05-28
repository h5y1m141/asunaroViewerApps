var exports = {
  init:function(/* String */ title){
    var $$ = require('ui/styles').prop;

    var backBtn = Titanium.UI.createButton($$.backBtn);
    backBtn.addEventListener('click',function(e){
      // 一番最初に選択されたブログタイトルがキャッシュされて
      // しまうようなので除去

      if(myApps.window.entry.toolBar){
        myApps.window.entry.remove(myApps.window.entry.toolBar);
      }
      myApps.window.entry.close({
        transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
      });
    });
    var refreshBtn  = Titanium.UI.createButton($$.refreshBtn);

    refreshBtn.addEventListener('click', function(e) {
      myApps.ui.actInd.show();
      myApps.contoller.updateEntries();
    });
    var blogTitle = Ti.UI.createLabel({
      textAlign:1,  // 1で中央揃えになる
      text:title,
      width:230,
      color:'#FFF',
      font:{
        fontSize:16
      }
    });

    var toolBar = Ti.UI.iOS.createToolbar({
      items:[backBtn,blogTitle,refreshBtn],
      top:0,
      left:0,
      barColor:'#222',
      height:40,
      zIndex:10
    });
    return toolBar;
  }
};


