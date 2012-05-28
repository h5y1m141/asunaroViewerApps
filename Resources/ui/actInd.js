var exports = {
  init:function(){
    var actInd  = Titanium.UI.createActivityIndicator({
      zIndex:10,
      top:50,
      height:55,
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