var theme = {
  color:'#999',
  backgroundColor:'#fff',
  barColor:'#000',
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
  tab1:{
    icon:theme.viewIcon
  },
  tab2:{
    icon:theme.uiIcon
  },
  headerRow:{
    width:'auto',
    backgroundGradient:theme.backgroundGradient,
    height:40,
    hasDetail:false
  },
  viewRow:{
    width:'auto',
    height:'auto',
    hasDetail:true
  },
  entrySummary:{
    font:{fontSize:12},
    left:55,
    top:30,
    width:245,
    height:40
  },
  entry:{
    font:{
      fontWeight:'bold',
      fontSize:14
    },
    color:'#000',
    left:55,
    top:5,
    width:'auto',
    height:20
  },

  bloggerName:{
    font:{fontSize:12},
    color:'#000',
    left:5,
    top:40,
    width:'auto',
    height:20
  },
  iconImage:{
    left:5,
    top:5,
    width:30,
    height:30
  },
  tableView:{
    backgroundColor:theme.backgroundColor
  },
  webViewLabel:{
    color:'#FFF',
    top:5,
    left:50,
    width:200,
    height:'auto'
  },
  webViewHeaderContainer:{
    backgroundColor:'#333',
    top:0,
    left:0,
    width:320,
    height:60,
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
  }
};

var exports = {
  prop:prop
};
