

$(document).ready(function(){
    $('.box1').toggle(function(){
        $('#box2').slideDown();
    },function(){
        $('#box2').slideUp('slow',0);
    });
});
