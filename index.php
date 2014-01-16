<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Video Sprawl</title>
	<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
</head>
<body>
	<h1>Video Sprawl</h1>
	
	<img class="wallpaper" src="wallpaper.jpg" alt="" data-autoplay="true" data-loop="loop" data-muted="muted" data-volumn="0" data-poster="wallpaper.jpg" data-mp4="wallpaper.mp4" data-webm="wallpaper.webm" data-ogg="wallpaper.ogv">

	<script src="videoSprawl.js"></script>
	<script>
	$(document).ready(function() {
		$('.wallpaper').videoSprawl();
	})
	
	</script>
</body>
</html>