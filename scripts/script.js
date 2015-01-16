$(document).ready(function() {
	// $(".nav").hide();
	$("nav > ul > li").hover(
		function() {
			$(".nav").hide();
			var ind = $(this).index();
			// console.log(ind);
			$(".nav:nth-of-type(" + (ind + 1) + ")").show();
			// $(".nav").show();
		}, function() {
			// $(".nav").hide();
		}
	);
	// $(".nav").hide();
	
	$(".nav").hover(
		function() {
			var ind = $(this).index() - 1;
			// console.log(ind);
			var s = "nav > ul > li:nth-of-type(" + (ind + 1) + ") > a > div";
			$(s).toggleClass("hovered");
		}, function() {
			var ind = $(this).index() - 1;
			var s = "nav > ul > li:nth-of-type(" + (ind + 1) + ") > a > div";
			$(s).toggleClass("hovered");
			$(this).hide();
		}
	);
})