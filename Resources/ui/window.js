var $$ = require('ui/styles').prop;

var exports = {
  createMainWindow :function(){
    var win = Titanium.UI.createWindow($$.win);

    return win;
  },
  createEntryWindow :function(){
    var win = Titanium.UI.createWindow($$.win);
    return win;
  },
  createEntryDetailWindow :function(){
    var win = Titanium.UI.createWindow($$.win);
    return win;
  }
};
