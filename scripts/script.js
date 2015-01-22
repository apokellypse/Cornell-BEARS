$(document).ready(function() {
	//for debugginng, comment out:
	$(".nav").hide();

	//show the nav for the current page, and apply hover effects
	var str = window.location.href.toString().split(window.location.host)[1];
	console.log(str);
	// var url = (str.indexOf("#") == -1) ? str.substring(str.lastIndexOf("/") + 1) : str.substring(str.lastIndexOf("/") + 1, str.lastIndexOf("#"))
	var url = str.substring(str.lastIndexOf("/") + 1, str.lastIndexOf("."))
	console.log(url);

	var current_pageid = -1;
	var url_list = ["index", "about", "members", "resources", "gallery"];
	for (i = 0; i < url_list.length; i++) {
		if (url == url_list[i]) {
			var s = "nav > ul > li:nth-of-type(" + (i + 1) + ") > a > div";
			$(s).toggleClass("fixedhover");
			// $(s).removeClass("hovered");
			$(".nav:nth-of-type(" + (i + 1) + ")").show();

			current_pageid = i;
			console.log(current_pageid);
			break;
		}
	}

	//when you hover over main navigation
	$("nav > ul > li").hover(
		function() {
			$(".nav").hide();
			var ind = $(this).index();
			// console.log(ind);
			$(".nav:nth-of-type(" + (ind + 1) + ")").show();
		}, function() {
			// $(".nav").hide();
			// $(".nav:nth-of-type(" + (current_pageid + 1) + ")").show();	
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

			$(".nav:nth-of-type(" + (current_pageid + 1) + ")").show();

		}
	);

})