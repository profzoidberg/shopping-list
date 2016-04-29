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
			$('.list').append('<li><input type="checkbox" id="checkbox"/> '+input+' </li>');
			$('#text').val("");
		}
	}
	$('input[type="checkbox"]:checked').on('change', function(){
        if (this.checked){
            $(this).css({'color':'grey', 'font-style': 'italic'});
        }           
    });     
  	$('.list-complete').click(function(){
  		$('.list li').empty();
  	});
});
