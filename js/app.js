$(document).ready(function(){
	$('#text').keydown(function(e){
		if (e.keyCode === 13) {
			addItemToList();
		}
	});
	$('.add').click(function(){
		addItemToList();
	})
	function addItemToList(){
		var input=$('#text').val();
		if (input !== "") { 
			$('.list').append('<li><input type="checkbox" class ".box"/> '+input+' </li>');
			$('#text').val("");
		}
	}
	$(document).on('change', 'input[type="checkbox"]:checked',function(){
            if (this.checked){
            	$('.list li').css({'color':'grey', 'font-style': 'italic'});
            }           
    });    
  	$('.list-complete').click(function(){
  		$('.list li').empty();
  	});
});