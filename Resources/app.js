var myApps = {};
myApps.ui = require('ui/ui');
myApps.entries = require('model/entries');
(function(){
  myApps.entries.loadFromMongoLab(function(entries){
    var rows = [];
    for(var i=0;i<entries.length;i++){
      var entry = entries[i];
      var row = myApps.ui.createEntryRow(entry);
      rows.push(row);
    }
    var tableView = myApps.ui.createTableView(rows);
    myApps.ui.addElement(tableView);
    myApps.ui.createMainWindow();
  });

}).call(this);





// var navBtn = Titanium.UI.createButton($$.prop.navBtn);
// navBtn.addEventListener('click',function(){

//   Ti.App.addEventListener("JSONDBDownloadSuccess", function(event) {
//     Ti.API.info(event.collection_name);
//     var rows = [];
//     //var entries = collection.find({},{blogger:1});
//     var entries = collection.find({}, {$sort:{postdate:1}, $limit:3});
//     for(var i=0;i<entries.length;i++){
//       var entry = entries[i];
//       Ti.API.info('post_date:'+ entry.postdate);
//       var row = ui.createEntryRow(entry);
//       rows.push(row);
//       /*
//         MongoLabから読み込んだデータをローカルにキャッシュ
//         しておきたいのでそのための処理実施
//       */
//       localCollection.save({
//         permalink:entry.permalink,
//         html_body:entry.html_body,
//         blogger:entry.blogger,
//         post_date:entry.post_date,
//         title:entry.title
//       });
//       localCollection.commit();

//     }
//     var tableView = ui.createTableView(rows);
//     win1.add(tableView);
//   });
//   Ti.App.addEventListener("JSONDBDownloadError", function(error) {
//     Ti.API.info(error);
//   });
// });


