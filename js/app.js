$(document).ready(function(){
	$('#text').keydown(function(e){
		if (e.keyCode === 13) {
		var input=$('#text').val();
		$('.list').append("<li> "+input+" </li>");
		}
	})
	.keyup(function(e){
		if (e.keyCode === 13) {
		$('#text').val("");
		}
	});
	$(".add").on('click', function(){
		var input=$('#text').val();
		$('.list').append("<li> "+input+" </li>");
	})
});