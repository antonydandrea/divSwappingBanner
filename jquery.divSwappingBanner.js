(function($){
    $.fn.divSwappingBanner = function(options) {

        var defaults = {
            image_height: "250px",
            highlight_selected: true,
            highlight_colour: "#FFFF85",
            default_image_selected: 1
        };
        var options = $.extend(defaults, options);

        var currentVisible, imageContainerWidth, imageContainerHeight;
        var numberOfImages = 0;
        $('#imageContainer').css('position', 'absolute');
        $('#imageContainer').outerWidth("100%");
        imageContainerWidth = $('#imageContainer').width();

        var unSelect = function(id) {
            var el = "#divSwappingBanner-image-"+id;
            var border_left_color  = $(el).data("border-left-color-old");
            var border_right_color  = $(el).data("border-right-color-old");
            var border_top_color = $(el).data("border-top-color-old");
            var border_bottom_color  = $(el).data("border-bottom-color-old");

            if (border_left_color === "none") {
                $(el).css("border-left-style", "");
            } else {
                $(el).css("border-left-color", border_left_color);
            }

            if (border_right_color === "none") {
                $(el).css("border-right-style", "");
            } else {
                $(el).css("border-right-color", border_right_color);
            }

            if (border_top_color === "none") {
                $(el).css("border-top-style", "");
            } else {
                $(el).css("border-top-color", border_top_color);
            }

            if (border_bottom_color === "none") {
                $(el).css("border-bottom-style", "");
            } else {
                $(el).css("border-bottom-color", border_bottom_color);
            }

        };

        var showSelected = function(id) {
            var el = "#divSwappingBanner-image-"+id;
            var border_left_style  = $(el).css("border-left-style");
            var border_right_style  = $(el).css("border-right-style");
            var border_top_style  = $(el).css("border-top-style");
            var border_bottom_style  = $(el).css("border-bottom-style");

            if (border_left_style === "none") {
                $(el).data("border-left-color-old", "none");
                $(el).css("border-left-style", "solid");
                $(el).css("border-left-color", options['highlight_colour']);
                $(el).css("border-left-width", "2px");
            } else {
                $(el).data("border-left-color-old", $(el).css("border-left-color"));
                $(el).css("border-left-color", options['highlight_colour']);
            }

            if (border_right_style === "none") {
                $(el).data("border-right-color-old", "none");
                $(el).css("border-right-style", "solid");
                $(el).css("border-right-color", options['highlight_colour']);
                $(el).css("border-right-width", "2px");
            } else {
                $(el).data("border-right-color-old", $(el).css("border-right-color"));
                $(el).css("border-right-color", options['highlight_colour']);
            }

            if (border_top_style === "none") {
                $(el).data("border-top-color-old", "none");
                $(el).css("border-top-style", "solid");
                $(el).css("border-top-color", options['highlight_colour']);
                $(el).css("border-top-width", "2px");
            } else {
                $(el).data("border-top-color-old", $(el).css("border-top-color"));
                $(el).css("border-top-color", options['highlight_colour']);
            }

            if (border_bottom_style === "none") {
                $(el).data("border-bottom-color-old", "none");
                $(el).css("border-bottom-style", "solid");
                $(el).css("border-bottom-color", options['highlight_colour']);
                $(el).css("border-bottom-width", "2px");
            } else {
                $(el).data("border-bottom-color-old", $(el).css("border-bottom-color"));
                $(el).css("border-bottom-color", options['highlight_colour']);
            }
        };

        $('div').each(function(){
            if( $(this).attr('id').match(/divSwappingBanner\-div\-[0-9]{1}/) ) {
                $(this).hide();
                $(this).css('position', 'absolute');
                $(this).css('-moz-box-sizing', 'border-box');
                $(this).css('-webkit-box-sizing', 'border-box');
                $(this).css('box-sizing', 'border-box');
                $(this).css('margin', '0 auto');
                $(this).outerWidth("100%");
                $(this).css('margin-top', options['image_height']);
            }
        });

        $('img').each(function(){
            if($(this).attr('id').match(/divSwappingBanner\-image\-([0-9]{1})/)) {
                numberOfImages = numberOfImages + 1;
            }
        });

        $('img').each(function(){
            if($(this).attr('id').match(/divSwappingBanner\-image\-([0-9]{1})/)) {
                var id = $(this).attr('id').match(/divSwappingBanner\-image\-([0-9]{1})/);
                $(this).css('-moz-box-sizing', 'border-box');
                $(this).css('-webkit-box-sizing', 'border-box');
                $(this).css('box-sizing', 'border-box');
                $(this).css('float', 'left');

                $(this).outerWidth(((100/numberOfImages))+"%");
                $('#imageContainer').outerHeight(options['image_height']);

                $(this).outerHeight("100%");

                imageContainerHeight = $('#imageContainer').outerHeight();

                if (parseInt(options['default_image_selected']) !== 0) {
                    if (parseInt(id[1]) === parseInt(options['default_image_selected'])) {
                        showSelected(id[1]);
                        $("#divSwappingBanner-div-"+id[1]).fadeIn();
                        currentVisible = id[1];
                    }
                }

                $(this).click(function(){
                    if (currentVisible !== "undefined" && currentVisible !== id[1]) {
                        $("#divSwappingBanner-div-"+currentVisible).fadeOut();
                    }
                    unSelect(currentVisible);
                    showSelected(id[1]);
                    $("#divSwappingBanner-div-"+id[1]).fadeIn();
                    currentVisible = id[1];
                });
            }
        });

    };
})(jQuery);