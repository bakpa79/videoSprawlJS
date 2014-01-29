//Example img tag
// <img class="vid_fallback videoSprawl" src="/path/to/file" alt="" data-autoplay="true" data-loop="loop" data-muted="muted" data-volumn="0" data-poster="/path/to/file" data-mp4="/path/to/file" data-webm="/path/to/file" data-ogg="/path/to/file">


(function( $ ) {
 
    $.fn.videoSprawl = function() {
 
        var jsonObject = $(this).data();

        //function to id and filter specific data elements. In this case, attibutes that need to be dropped into the <video> tag as tag options ie. autoplay, loop, etc
        function show_props(obj) {
            var $video = $("<video />");
            for (var prop in obj) {

                switch (prop) {
                    case "autoplay":
                        $video.attr({
                            autoplay: obj.autoplay
                        });
                        break;
                    case "loop":
                        $video.attr({
                            loop: obj.loop
                        });
                        break;
                    case "muted":
                        $video.attr({
                            muted: obj.muted
                        });
                        break;
                    case "volume":
                        $video.attr({
                            volume: obj.volume
                        });
                        break;
                    case "poster":
                        $video.attr({
                            poster: obj.poster
                        });
                        break;
                    case "preload":
                        if(obj.preload) $video.attr("preload" , "");
                        break;
                    case "controls":
                        if(obj.controls) $video.attr("controls", "");
                        break;

                    default:
                        $video.append("<source src="+obj[prop]+ " type=\"video/"+prop+ "\">");
                }
            }
            //return the <video> tag
            return $video;
        }

        var video = show_props(jsonObject, "jsonObject");

        if ($("html").hasClass("touch")) {
            // detect if the html element has touch class via Modernizr; if is mobile, ie, no autoplay, Do Nothing
        } else {
            $(this).replaceWith(video);
        }
 
    };
 
}( jQuery ));