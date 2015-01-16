<?php include 'constants.php' ?>
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Cornell BEARS | Building Empowered and Resourceful Scholars</title>
	<meta name="description" content="website of Cornell BEARS, a mentoring organization founded at Cornell University">
	<meta name="author" content="Kelly Yu">
	<!-- <meta http-equiv="expires"> -->
	<link rel="icon" type="image/ico" href="">
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="css/normalize.css">
	<link rel="stylesheet" href="css/style.css">
	<link href='http://fonts.googleapis.com/css?family=Khand' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet' type='text/css'>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script type="text/javascript" src="scripts/script.js"></script>
</head>
<body>
	<header>
		<p><a href="index.php"><?=$org_title;?></a></p>
		<nav>
			<ul>
				<li><a href="index.php"><div><?=$nav_link1?></div></a></li>
				<li><a href="about.php"><div><?=$nav_link2?></div></a></li>
				<li><a href="members.php"><div><?=$nav_link3?></div></a></li>
				<li><a href="resources.php"><div><?=$nav_link4?></div></a></li>
				<li><a href="gallery.php"><div><?=$nav_link5?></div></a></li>
			</ul>
		</nav>
	</header>
	<!--submenu for Home-->
	<section class="nav"></section>
	<!--submenu for About Us-->
	<section class="nav">
		<div>
			<ul>
				<li id="team">
					<a href="team.php"><div>
						<h1><?=$nav_link21?></h1>
						<p><?=$nav_link21_text?></p>
					</div></a>
				</li>
				<li id="faq">
					<a href="faq.php"><div>
						<h1><?=$nav_link22?></h1>
						<p><?=$nav_link22_text?></p>
					</div></a>
				</li>
				<li id="mail">
					<a href=""><div>
						<h1><?=$nav_link23?></h1>
						<p><?=$nav_link23_text?></p>
						<p><?=$email?></p>
					</div></a>
				</li>
			</ul>	
		</div>
	</section>
	<!--submenu for Membership-->
	<section class="nav">
		<div>
			<ul>
				<li><h1><?=$nav_link31?></h1></li>
				<li><h1><?=$nav_link32?></h1></li>
				<li><h1><?=$nav_link33?></h1></li>
			</ul>		
		</div>
	</section>
	<!--submenu for Resources-->
	<section class="nav">
		<div>
			<ul>
				<li><h1><?=$nav_link41?></h1></li>
				<li><h1><?=$nav_link42?></h1></li>
			</ul>
		</div>
	</section>
	<!--submenu for Gallery-->
	<section class="nav"></section>

</body>
</html>