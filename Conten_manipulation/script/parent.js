$(document).ready(function(){
    $('button[name=ganti]').click(function(){
        var data = $('#get1 table td').parent().parent().parent().html()
        alert(data)
    });
});
