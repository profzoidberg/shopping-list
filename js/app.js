$(document).ready(function(){
	$('#text').keydown(function(e){
		if (e.keyCode === 13) {
		$('#text').val();
		$('.list').append("<li> "+$('#text').val()+" </li>");
		}
	})
	$(".add").on('click', function(){
		$('#text').val();
		$('.list').append("<li> "+$('#text').val()+" </li>");
	})
});