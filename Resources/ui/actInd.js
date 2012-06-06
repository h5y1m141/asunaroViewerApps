var exports = {
  init:function(){
    var actInd  = Titanium.UI.createActivityIndicator({
      zIndex:15,
      top:100,
      height:55,
      left:100,
      width:'auto',
      backgroundColor:'#000',
      color:'#fff',
      font:{fontFamily:'Helvetica Neue',fontSize:13},
      message:'Loading...',
      style:Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
    });
    return actInd;
  }
};