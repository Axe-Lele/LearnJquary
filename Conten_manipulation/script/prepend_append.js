
$(document).ready(function(){
    $('button[name=prepend]').click(function(){
         $('#get1 table').prepend('<tr><td>baris baru</td></tr>');
    });

    $('button[name=append]').click(function(){
         $('#get2 table').append('<tr><td>baris baru</td></tr>');
    });
});
