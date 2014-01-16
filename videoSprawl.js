//Example img tag
// <img class="vid_fallback videoSprawl" src="/path/to/file" alt="" data-autoplay="true" data-loop="loop" data-muted="muted" data-volumn="0" data-poster="/path/to/file" data-mp4="/path/to/file" data-webm="/path/to/file" data-ogg="/path/to/file">


(function( $ ) {
 
    $.fn.videoSprawl = function() {
 
        //function to scrape and grab all the data-attributes in to an objects
        strJson = '{'
        $.each($(this).data(), function(i, v) {
            strJson += i + ":'" + v + "',";
        });
        strJson = strJson.substring(0, strJson.length - 1);
        strJson += '}';
        var jsonObject = eval('(' + strJson +')');



        //function to id and filter specific data elements. In this case, attibutes that need to be dropped into the <video> tag as tag options ie. autoplay, loop, etc
        function show_props(obj, objName) {
          var result = "";
          var posterResult = "";
          for (var prop in obj) {posterResulturl = obj[posterResult];
            //}
            if (prop == "autoplay") {
            	autoplayEl = obj.autoplay;
            	autoplayProp = prop;
            	console.log(prop+" "+autoplayEl);
            	delete obj.autoplay;
            } else if(prop == "loop") {
            	loopEl = obj.loop;
            	loopProp = prop;
            	console.log(loopProp+" "+loopEl);
            	delete obj.loop;
            } else if(prop == "muted") {
            	mutedEl = obj.muted;
            	mutedProp = prop;
            	console.log(mutedProp+" "+mutedEl);
            	delete obj.muted;
            } else if(prop == "volumn") {
            	volumnEl = obj.volumn;
            	volumnProp = prop;
            	console.log(volumnProp+" "+volumnEl);
            	delete obj.volumn;
            } else if(prop == "poster") {
            	posterEl = obj.poster;
            	posterProp = prop;
            	console.log(prop+" "+posterEl);
            	delete obj.poster;
            };
            //for anything that isn't an attribute above, drop in as src videos
            result += "<source src="+obj[prop]+ " type=\"video/"+prop+ "\">\n";
          }
          //return the <video> tag
          return "<video "+ volumnProp +"=\"" +volumnEl +"\""+ mutedProp+"=\"" +mutedEl +"\" "+ loopProp + "=\"" +loopEl +"\""+ autoplayProp +"=\"" + autoplayEl +"\""+ posterProp+"=\"" +posterEl +"\">" + result + "</video>";
        }

        show_props(jsonObject, "jsonObject");

        if ($('html').hasClass('touch')) {
        	// detect if the html element has touch class via Modernizr; if is mobile, ie, no autoplay, Do Nothing
        } else {
        	$(this).replaceWith(show_props(jsonObject, "jsonObject"));
        }
 
    };
 
}( jQuery ));