var theme = {
  color:'#999',
  whiteGray:'#CCC',
  backgroundColor:'#333',
  barColor:'#D00',
  font:{fontSize:20,fontFamily:'Helvetica Neue'},
  textAlign:'center',
  width:'auto',
  viewIcon:'KS_nav_views.png',
  uiIcon:'KS_nav_ui.png',
  backgroundGradient: {
    type: 'linear',
    startPoint: { x: '50%', y: '0%' },
    endPoint: { x: '50%', y: '100%' },
    colors: [
      { color: '#000', offset: 0.0},
      { color: '#333', offset: 0.5 },
      { color: '#666', offset: 0.75 },
      { color: '#999', offset: 1.0 }
    ]
  },
  tableViewGradient: {
    type: 'linear',
    startPoint: { x: '50%', y: '0%' },
    endPoint: { x: '50%', y: '100%' },
    colors: [
      { color: '#000', offset: 0.0},
      { color: '#333', offset: 0.3},
      { color: '#666', offset: 0.9},
      { color: '#000', offset: 1.0}
    ]
  }


};
var prop = {
  win: {
    backgroundColor:theme.backgroundColor,
    barColor:theme.barColor,
    tabBarHidden:true
  },
  entryWin:{
    backgroundColor:theme.backgroundColor,
    backButtonTitle:'戻る',
    title:'',
    barColor:theme.barColor,
    tabBarHidden:true
  },
  tweetWindow:{
    backgroundColor:theme.backgroundColor,
    title:'新規tweet',
    tabBarHidden:true
 },
  label : {
    color:'#FFF',
    textAlign:theme.textAlign,
    width:theme.width
  },
  viewRow:{
    width:'auto',
    borderWidth:3,
    borderColor:'#000',
    backgroundGradient:theme.tableViewGradient,
    height:80
  },

  entrySummary:{
    font:{
      fontSize:12
    },
    left:75,
    color:'#fff',
    top:40,
    width:200,
    height:40
  },
  entry:{
    font:{
      fontWeight:'bold',
      fontSize:16
    },
    color:'#fff',
    left:65,
    top:10,
    width:200,
    height:20
  },
  updateTime:{
    font:{
      fontSize:10
    },
    color:'#fff',
    left:280,
    top:10,
    width:40,
    height:40
  },
  bloggerName:{
    font:{
      fontSize:10
    },
    color:'#000',
    left:5,
    top:50,
    width:'auto',
    height:20
  },
  iconImage:{
    left:5,
    top:10,
    borderWidth:1,
    borderColor:'#222',
    borderRadius:5,
    width:50,
    height:50
  },
  iconOverrap:{
    left:5,
    top:10,
    width:50,
    height:50,
    /*
      refrence:http://developer.appcelerator.com/question/132299/how-to-apply-glow-to-an-image
     */
    backgroundSelectedColor:'green',
    opacity:0.5
  },
  tableView:{
    backgroundGradient:theme.backgroundGradient,
    separatorColor: '#333'
  },
  webViewLabel:{
    font:{
      fontWeight:'bold',
      fontSize:16
    },
    color:'#fff',
    top:5,
    left:60,
    width:240,
    height:'auto'
  },
  webViewHeaderContainer:{
    backgroundColor:'#333',
    top:0,
    left:0,
    width:320,
    height:'auto',
    backgroundGradient:theme.backgroundGradient
  },
  webViewBody:{
    backgroundColor:'#CCC',
    top:60,
    left:0,
    width:320,
    layout:'vertical'
  },
  webView:{
    top:65,
    left:5,
    width:310
  },
  closeBtn:{
    title:'閉じる'
  },
  navBtn:{
    width:30,
    height:30,
    systemButton: Titanium.UI.iPhone.SystemButton.ACTION
  },
  refreshBtn:{
    width:50,
    height:30,
    systemButton: Titanium.UI.iPhone.SystemButton.REFRESH
  },
  backBtn:{
    width:60,
    height:30,
    title:'戻る'
  },
  composeBtn:{
    width:60,
    height:30,
    systemButton: Titanium.UI.iPhone.SystemButton.ACTION
  },
  // tableView refresh function
  border:{
    backgroundColor:"#576c89",
    height:2,
    bottom:0
  },
  tableHeader:{
    backgroundColor:"#e2e7ed",
    width:320,
    height:60
  },
  tableHooter:{
    backgroundColor:"#996666",
    width:320,
    height:60
  },
  arrow:{
    backgroundImage:"/ui/parts/arrow.png",
    width:23,
    height:60,
    bottom:10,
    left:20
  },
  statusLabel:{
    text:"引っ張って更新します",
    left:55,
    width:200,
    bottom:30,
    height:"auto",
    color:"#576c89",
    textAlign:"center",
    font:{fontSize:13,fontWeight:"bold"},
    shadowColor:"#999",
    shadowOffset:{x:0,y:1}
  },
  lastUpdatedLabel:{
    text:"Last Updated: ",
    left:55,
    width:200,
    bottom:15,
    height:"auto",
    color:"#576c89",
    textAlign:"center",
    font:{fontSize:12},
    shadowColor:"#999",
    shadowOffset:{x:0,y:1}
  },
  actInd:{
    left:20,
    bottom:13,
    width:30,
    height:30
  }
};

var exports = {
  prop:prop
};
