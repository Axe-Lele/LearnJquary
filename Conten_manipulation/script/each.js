$(document).ready(function(){
    $('button[name=ganti]').click(function(){
        var data = [];
        $('td').each(function(){
            data.push($(this).text());
        });
        alert(data);
    });
});
