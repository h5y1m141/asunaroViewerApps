var $$ = require('ui/styles').prop;

var exports = {
  createMainWindow :function(){
    var win = Titanium.UI.createWindow($$.win);
    win.title = 'あすなろBLOG';
    win.rightNavButton = (function(){
      var button = Titanium.UI.createButton($$.refreshBtn);
      button.addEventListener('click', function() {
      });
      return button;
    })();

    win.leftNavButton = (function(){
      var button = Titanium.UI.createButton($$.listBtn);
      button.addEventListener('click', function() {

        if(!myApps.ui.mainTable.moved){
          myApps.ui.mainTable.animate({
            duration:180,
            left:200
          });
          myApps.ui.mainTable.moved = true;
          myApps.ui.webView.hide();
        }else{
          myApps.ui.mainTable.animate({
            duration:180,
            left:5
          });
          myApps.ui.mainTable.moved = false;
          myApps.ui.webView.hide();
        }
      });
      return button;
    })();
    return win;
  }
};
