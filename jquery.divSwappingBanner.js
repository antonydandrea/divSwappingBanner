(function($){
    $.fn.divSwappingBanner = function(options) {

        var defaults = {
            image_height: "250px",
            highlight_selected: true,
            default_image_selected: 1
        };
        var options = $.extend(defaults, options);

        var currentVisible, imageContainerWidth, imageContainerHeight;
        var numberOfImages = 0;
        $('#imageContainer').css('position', 'absolute');
        $('#imageContainer').outerWidth("100%");
        imageContainerWidth = $('#imageContainer').width();


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
                        $("#divSwappingBanner-div-"+id[1]).fadeIn();
                        currentVisible = id[1];
                    }
                }

                $(this).click(function(){
                    if (currentVisible !== "undefined" && currentVisible !== id[1]) {
                        $("#divSwappingBanner-div-"+currentVisible).fadeOut();
                    }

                    $("#divSwappingBanner-div-"+id[1]).fadeIn();
                    currentVisible = id[1];
                });
            }
        });

    };
})(jQuery);