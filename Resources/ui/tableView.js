var $$ = require('ui/styles').prop;
var pulling = false;
var reloading = false;
var border = Ti.UI.createView($$.border);
var tableHeader = Ti.UI.createView($$.tableHeader);
var arrow = Ti.UI.createView($$.arrow);
var statusLabel = Ti.UI.createLabel($$.statusLabel);
var lastUpdatedLabel = Ti.UI.createLabel($$.lastUpdatedLabel);
var actInd = Titanium.UI.createActivityIndicator($$.actInd);
var tableView = Ti.UI.createTableView($$.tableView);

var exports = {
  create:function(){
    var self = this;

    tableView.addEventListener('scroll',function(e){
      var offset = e.contentOffset.y;
      if (offset <= -65.0 && !pulling){
        var t = Ti.UI.create2DMatrix();
        t = t.rotate(-180);
        pulling = true;
        arrow.animate({transform:t,duration:180});
        statusLabel.text = "Release to refresh...";
      } else if (pulling && offset > -65.0 && offset < 0) {
        pulling = false;
        var t = Ti.UI.create2DMatrix();
        arrow.animate({transform:t,duration:180});
        statusLabel.text = "Pull down to refresh...";
      }
    });

    tableView.addEventListener('scrollEnd',function(e){
      if (pulling && !reloading && e.contentOffset.y <= -65.0)  {
        reloading = true;
        pulling = false;
        arrow.hide();
        actInd.show();
        statusLabel.text = "Reloading...";
        tableView.setContentInsets({top:60},{animated:true});
        arrow.transform=Ti.UI.create2DMatrix();
        self.beginReloading();
      }
    });
    tableHeader.add(border);
    tableHeader.add(arrow);
    tableHeader.add(statusLabel);
    tableHeader.add(lastUpdatedLabel);
    tableHeader.add(actInd);
    tableView.headerPullView = tableHeader;
    return tableView;
  },
  beginReloading:function(){
    // just mock out the reload
    var self = this;
    setTimeout(self.endReloading(),2000);
  },
  endReloading:function(){

    tableView.setContentInsets({top:0},{animated:true});
    reloading = false;
    lastUpdatedLabel.text = "Last Updated: "+formatDate();
    statusLabel.text = "Pull down to refresh...";
    actInd.hide();
    arrow.show();
  }
};

// private method

function formatDate(){
  var date = new Date;
  var datestr = date.getMonth()+'/'+date.getDate()+'/'+date.getFullYear();
  if (date.getHours()>=12){
    datestr+=' '+(date.getHours()==12 ? date.getHours() : date.getHours()-12)+':'+date.getMinutes()+' PM';
  }else{
    datestr+=' '+date.getHours()+':'+date.getMinutes()+' AM';
  }
  return datestr;
}
