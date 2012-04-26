var theme = {
  color:'#999',
  whiteGray:'#CCC',
  backgroundColor:'#333',
  //barColor:'#121212',
  barColor:'#7a7a7a',
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
      { color: '#999', offset: 1.0}
    ]
  },
  headerGradient:{
    type: 'linear',
    startPoint: { x: '50%', y: '0%' },
    endPoint: { x: '50%', y: '100%' },
    colors: [
      { color: '#000', offset: 0.0},
      { color: '#333', offset: 0.1 },
      { color: '#333', offset: 0.95},
      { color: '#000', offset: 1.0 }
    ]
  },

  tableViewWhiteGradient: {
    type: 'linear',
    startPoint: { x: '50%', y: '0%' },
    endPoint: { x: '50%', y: '100%' },
    colors: [
      { color: '#DDD', offset: 0.0},
      { color: '#FFF', offset: 0.1},
      { color: '#FFF', offset: 0.9},
      { color: '#DDD', offset: 1.0}
    ]
  }


};
var prop = {
  win: {
    backgroundColor:theme.backgroundColor,
    barColor:theme.barColor,
    tabBarHidden:true,
    navBarHidden:false
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
    color:'#333',
    textAlign:theme.textAlign,
    width:theme.width
  },

  entrySummary:{
    font:{
      fontSize:12
    },
    left:75,
    color:'#000',
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
    color:'#666',
    left:270,
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
    backgroundColor:'#ededed',
    separatorColor: '#999',
    moved: false,
    zIndex:2,
    borderRadius:10,
    width:310,
    left:5,
    top:5
  },
  bloggerRow:{
    width:200,
    borderWidth:2,
    borderColor:'#999',
    backgroundColor:'#222',
    color:'#fff',
    height:40
  },
  bloggerTable:{
    backgroundColor:'#222',
    separatorColor: '#999',
    zIndex:1,
    width:310,
    left:5,
    top:5
  },
  viewRow:{
    width:'auto',
    borderWidth:1,
    borderColor:'#ededed',
    height:100
  },

  webViewLabel:{
    font:{
      fontWeight:'bold',
      fontSize:16
    },
    color:'#fff',
    top:10,
    left:80,
    width:200,
    height:'auto'
  },
  webViewHeaderContainer:{
    backgroundColor:'#333',
    top:0,
    left:0,
    width:320,
    height:80,
    backgroundColor:'#141414'
  },
  webViewContainer:{
    backgroundColor:'#CCC',
    top:60,
    left:0,
    width:320,
    height:480,
    layout:'vertical',
    zIndex:4,
    moved:false
  },
  webView:{
    top:65,
    left:0,
    zIndex:5,

    width:320
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
    width:30,
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
  configBtn:{
    width:25,
    height:25,
    backgroundImage:'/ui/parts/config.png'
  },
  listBtn:{
    width:25,
    height:25,
    systemButton: Titanium.UI.iPhone.SystemButton.BOOKMARKS
  },
  switchBtn:{
    left:100,
    value:false,
    titleOn:'購読する',
    titleOff: '購読しない'
  },
  // tableView refresh function
  border:{
    backgroundColor:"#576c89",
    height:2,
    bottom:0
  },
  tableHeader:{
    backgroundGradient:theme.headerGradient,
    width:320,
    height:100,
    zIndex:2,
    top:0,
    left:0
  },
  tableHooter:{
    backgroundColor:"#996666",
    width:320,
    height:60
  },
  lightCommentBtn:{
    left:50,
    width:25,
    height:25,
    backgroundImage:'/ui/parts/light_comment.png'
  },
  lightMailBtn:{
    left:100,
    width:25,
    height:25,
    backgroundImage:'/ui/parts/light_mail.png'
  },
  lightStarBtn:{
    left:150,
    width:25,
    height:25,
    backgroundImage:'/ui/parts/light_star.png'
  },
  lightTextBtn:{
    left:200,
    width:25,
    height:25,
    backgroundImage:'/ui/parts/light_text.png'
  },
  blogTitle:{
    left:40,
    top:5,
    width:200,
    height:'auto',
    font:{
      fontSize:12
    },
    color:'#FFF'
  },
  bloggerIcon:{
    width:30,
    height:30,
    left:5,
    top:5
  },
  composeRow:{
    width:'auto',
    borderWidth:1,
    backgroundColor:'#898989',
    height:40
  },
  underView:{
    top:75,
    left:75,
    width:200,
    height:25
  },
  twitterBtn:{
    width:20,
    height:20,
    top:0,
    left:10,
    image:'/ui/parts/icon_twitter.png'
  },
  tweetRTCount:{
    width:40,
    height:20,
    top:0,
    left:40,
    color:"#898989",
    font:{
      fontSize:12
    },
    text:"30"
  },
  hatebuBtn:{
    width:20,
    height:20,
    top:0,
    left:90,
    image:'/ui/parts/icon_hatena.png'
  },
  hatebuCount:{
    width:40,
    height:20,
    top:0,
    left:120,
    color:"#898989",
    font:{
      fontSize:12
    },
    text:'200'
  },
  facebookBtn:{
    width:20,
    height:20,
    top:0,
    left:170,
    image:'/ui/parts/icon_facebook.png'
  },
  facebookLikeCount:{
    width:40,
    height:20,
    top:0,
    left:200,
    color:"#898989",
    font:{
      fontSize:12
    },
    text:'200'
  }
};

var exports = {
  prop:prop
};
