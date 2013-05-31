divSwappingBanner
=================
jQuery plugin for having a row of images and some div blocks that appear depending on which image is selected. All CSS is handled by the plugin.

Compatibilities
=================
Requires JQuery version 1.8.0 or higher. Works with 2.0.0 and above also.

Compatible with Firfox, Chrome and Internet Explorer 8 and above. Untested on other browsers.

Note that JQuery 2.0.0 required Internet Explorer 9 and above.
It does function with Internet Explorer 6 and 7 but the layout is not as it is intended to look. The same is true with lesser versions
of JQuery.

A minified version of JQuery 1.10.0 is included in the package and is used in the demo.

How to use
=================
The Demo shows how to do the basic set up.

1) The only file that you need from the download is jquery.divSwappingBanner.js. Put this in whatever directory you wish and link to it in your application with:
<script src="path/to/jquery.divSwappingBanner.js" type="text/javascript"></script>
Make sure that you include the JQuery library before hand.

2) Create a div block with an id of "imageContainer".

3) Inside imageContainer, put your images. Each image must have an id of divSwappingBanner-image-x, where x is a unique number greater than 0. The class must be divSwappingBannerImage.

4) Make you div blocks with the content inside. Each div tag must have an id of divSwappingBanner-div-x, where x matches up with the x in the id of the image that you want to
click to show this div. The class must be divSwappingBannerContentDiv.

5) Now simple call the script like so:
<script>
    $(document).ready( function() {
        $().divSwappingBanner({});
    });
</script>

6) You can add some options like so (any mix of the following):
<script>
$(document).ready( function() {
    $().divSwappingBanner({
        image_height:"40px", //default is 250px
        highlight_selected: false, //default is true
        highlight_colour: ,         //default is #FFFF85
        default_image_selected: 4 //default is 1
    });
});
</script>

image_height: The height of the banner at the top.
highlight_selected: highlights the currently selected image with a border.
highlight_colour: specify the colour of the colour of the border of the selected image.
default_image_selected: When the page loads, you can have an image pre-selected. This defaults to first image. Set this to 0 if you do not want any image selected.

7) A CSS file is not necessary, but you can add your own borders around the images and the plugin will adapt the size automatically. Also, if you have borders already set, the highlight_selected feature will
use the style and width you have set.

LICENCE
=================
The MIT License (MIT)

Copyright (c) 2013 Antony D'Andrea

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Contact
=================
Antony D'Andrea
contactme@antonydandrea.com