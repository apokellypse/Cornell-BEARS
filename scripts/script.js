$(document).ready(function() {
	//for debugginng, comment out:
	$(".nav").hide();

	//when you hover over main navigation
	$("nav > ul > li").hover(
		function() {
			$(".nav").hide();
			var ind = $(this).index();
			// console.log(ind);
			$(".nav:nth-of-type(" + (ind + 1) + ")").show();
		}, function() {
		}
	);

	//when you hover over sub navigation
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

	// evenHeights();

	//CSS workaround, probably terrible style, will fix later
	// function evenHeights() {
	// 	var h = $("#mail > a > div").css("height");
	// 	console.log(h);
	// 	$("#team > a > div").css("height", h);
	// 	$("#faq > a > div").css("height", h);
	// }

})