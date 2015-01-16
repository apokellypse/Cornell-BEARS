$(document).ready(function() {
	$(".nav").hide();
	$("nav > ul > li").hover(
		function() {
			$(".nav").hide();
			var ind = $(this).index();
			console.log(ind);
			$(".nav:nth-of-type(" + (ind + 1) + ")").show();
			// $(".nav").show();
		}, function() {
			// $(".nav").hide();
		}
	);
	$(".nav").hide();
	$(".nav").hover(
		function() {

		}, function() {
			$(this).hide();
		}
	);
})