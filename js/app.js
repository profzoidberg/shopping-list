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
			$('.list').append('<li><input type="checkbox" class="checkbox"/> '+input+' </li>');
			$('#text').val("");
		}
	}
	$('.checkbox').click(function(){	
		alert('hello');
	});
});