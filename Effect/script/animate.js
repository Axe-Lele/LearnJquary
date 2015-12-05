//animate


$(document).ready(function(){
   $(".box1").click(function(){
       $("#box2").animate({opacity:5 , bottom:"-=300"},5000 ,function(){alert("hello word")})
   });
});
