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
			$('.list').append('<li><input type="checkbox"/> '+input+' <button class="button">Done</button> </li>');
			$('#text').val("");
		}
	}
	$('.list').on('click','li', function(){ 
       if ($(':checkbox').is(':checked')) {
       		$(this).css({'color':'gray', 'font-style': 'italic'});
       	} else { 
       		$(this).css({'color': 'black', 'font-style': 'normal'});
       	}
    })
    // $('.list').on('click','li', function(){
    // 	if ($('.button').is('clicked')); {
    // 		$(this).empty();
    // 	}
    // });
  	$('.list-complete').click(function(){
  		$('.list li').empty();
  	});
});
