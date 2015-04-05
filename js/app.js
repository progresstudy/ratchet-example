document.addEventListener("blendready",function(){
window.addEventListener("push", function(e){
   if(e.detail.state.url.indexOf("detail") != -1){
     console.log("bind");
     $("#shareBtn").bind("touchend", function(e){
     Blend.mbaas.socialshare.callShare({
     "mediaType": "all",
     "content": "xxxxxx share",
     onsuccess: function (){},
     onfail: function(){}
     });
     })
   }
})
}); 