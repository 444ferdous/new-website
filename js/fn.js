$(document).ready(function(){
	var width=$(window).width();
	if(width<500){
		$(".mainmenu").hide();
	}
	else{
		$(".menuToggleButton").hide();
	}
	$(".menuToggleButton").click(function(){
		$(".mainmenu").toggle();
	});
});