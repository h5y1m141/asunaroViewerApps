var theme = {
  color:'#999',
  whiteGray:'#CCC',
  backgroundColor:'#fff',
  barColor:'#000',
  font:{fontSize:20,fontFamily:'Helvetica Neue'},
  textAlign:'center',
  width:'auto',
  viewIcon:'KS_nav_views.png',
  uiIcon:'KS_nav_ui.png',
  canvas:'/ui/parts/canvas.png',
  noise:'/ui/parts/noisePattern.png',
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
  }


};
var prop = {
  win: {
    backgroundColor:theme.backgroundColor,
    barColor:theme.barColor
  },
  entryWin:{
    backgroundColor:theme.backgroundColor,
    backButtonTitle:'戻る',
    title:'',
    barColor:theme.barColor
  },
  tweetWindow:{
    backgroundColor:theme.backgroundColor,
    title:'新規tweet'
 },
  label : {
    color:'#FFF',
    textAlign:theme.textAlign,
    width:theme.width
  },
  viewRow:{
    width:'auto',
    backgroundColor:theme.backgroundColor,
    height:80
  },

  entrySummary:{
    font:{
      fontSize:12
    },
    left:75,
    color:'#333333',
    top:30,
    width:200,
    height:40
  },
  entry:{
    font:{
      fontWeight:'bold',
      fontSize:16
    },
    color:'#000',
    left:65,
    top:10,
    width:200,
    height:20
  },
  updateTime:{
    font:{
      fontSize:10
    },
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
    top:5,
    width:50,
    height:50
  },
  tableView:{
    backgroundGradient:theme.backgroundGradient
  },
  webViewLabel:{
    color:'#663300',
    font:{
      fontWeight:'bold',
      fontSize:20
    },
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
    width:310,
    borderRadius:10
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
    systemButton: Titanium.UI.iPhone.SystemButton.BACK
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
