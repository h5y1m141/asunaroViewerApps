var exports = {
  init:function(/* String */  userid, /* String */ title){
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
      myApps.controller.updateEntries();
    });
    var blogTitle = Ti.UI.createLabel({
      textAlign:0,  //0:左揃え、 1:中央揃え、2：右揃え
      text:title,
      width:200,
      color:'#FFF',
      font:{
        fontSize:14
      }
    });
    var bloggerIcon = Ti.UI.createImageView({
      width:30,
      height:30,
      image:'/ui/images/' + userid + '.gif'
    });
    var toolBar = Ti.UI.iOS.createToolbar({
      items:[backBtn,bloggerIcon,blogTitle,refreshBtn],
      top:0,
      left:0,
      barColor:'#222',
      height:40,
      zIndex:10
    });
    return toolBar;
  }
};


