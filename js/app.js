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
			$('.list').append('<li><input type="checkbox"/> '+input+' </li>');
			$('#text').val("");
		}
	}
	$('.list').on('click','li',function(){
       $(this).css({'color':'gray', 'font-style': 'italic'});
    })
  	$('.list-complete').click(function(){
  		$('.list li').empty();
  	});
});
