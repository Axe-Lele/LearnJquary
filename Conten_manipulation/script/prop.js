$(document).ready(function(){
    $('button[name=ganti]').click(function(){
        $('input[name=durjana]').prop('checked',false);
        $('select[name=data] option[value=2]').prop('selected',true)   
    });
});
