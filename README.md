videoSprawlJS
=============

HTML5 video embed jQuery Plugin with built in image fallback

# Description:

So, I needed a clean way to drop an HTML5 wallpaper video element into my project. Target the element you'd like to replace, add the appropriate data attributes to it, and videoSprawl with replace it with a video embed.

Currently, this is designed for modern browsers - for IE9 and earlier, you will need Modernizr installed to provide a fallback for the <video> element.

## Dependancies:
[jQuery](http://jquery.com/).

## How to use
Include jQuery in the header, and videoSprawl right before the closing ```html</body>``` tag.

```html
<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="videoSprawl.js"></script>
<script>
$(document).ready(function() {
        $('.element-classname-here').videoSprawl();
})
</script>
```

Questions? [Brian Akpa](http://www.brianakpa.com)

### Download, Fork, Commit.
If you think you can make this better, please Download, Fork, & Commit. We'd love to see your ideas.
