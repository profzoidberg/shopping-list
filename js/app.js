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
			$('.list').append('<li><input type="checkbox"/> '+input+' <button class="delete"><i class="fa fa-trash" aria-hidden="true"></i></button></li>');
			$('#text').val("");
		}
	}
	$('.list').on('click','li', function(){ 
       if ($(':checkbox').is(':checked')) {
       		$(this).css({'color':'gray', 'font-style': 'italic'});
       	} else { 
       		$(this).css({'color': 'black', 'font-style': 'normal'});
       	}
    });
    $('.list').on('click','.delete', function(){
   			$(this).closest('li').remove();
    });
  	$('.list-complete').click(function(){
  		$('.list li').remove();
  		  	});
});
