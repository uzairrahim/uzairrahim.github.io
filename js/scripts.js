$(function(){
	console.log("Welcome to uzairrahim.com");

	var wh = $(window).height();
	var ypos = 0;
	var threshold = 30;

	$(window).on("scroll", function(event){
		ypos = window.pageYOffset;

		if(ypos < 30){
			window.scrollTo(0, 0);
		}

		if(ypos > wh - threshold && ypos < wh + threshold){
			window.scrollTo(0, wh);
		}
	});

	$("button.download").click(function(){
		window.open("Resume-UzairRahim.pdf");
	});

});