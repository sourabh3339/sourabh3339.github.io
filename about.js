$(document).ready(function(){

$('#about-me').on('click',function(){
	$('#about-me').hide();
  $('#info').css("transform","translateX(0)");
});

$('#close').on('click',function(){
	$('#about-me').show();
  $('#info').css("transform","translateX(100%)");
});

});

