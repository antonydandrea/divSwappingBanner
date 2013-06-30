(function($){
    $.fn.divSwappingBanner = function(options) {

        var defaults = {
            image_height: "250px",
            highlight_selected: true,
            default_image_selected: 1,
            auto_scroll_enabled: false,
            auto_scroll_time: 5
        };
        var options = $.extend(defaults, options);

        var currentVisible, imageContainerWidth, imageContainerHeight;
        var numberOfImages = 0;
        $('#imageContainer').css('position', 'absolute');
        $('#imageContainer').outerWidth("100%");
        imageContainerWidth = $('#imageContainer').width();

        $('img').each(function(){
            if($(this).attr('id').match(/divSwappingBanner\-image\-([0-9]{1})/)) {
                numberOfImages = numberOfImages + 1;
            }
        });

        $('img').each(function(){
            if($(this).attr('id').match(/divSwappingBanner\-image\-([0-9]{1})/)) {
                $(this).css('-moz-box-sizing', 'border-box');
                $(this).css('-webkit-box-sizing', 'border-box');
                $(this).css('box-sizing', 'border-box');
                $(this).css('float', 'left');

                $(this).outerWidth(((100/numberOfImages))+"%");
                $('#imageContainer').outerHeight(options['image_height']);

                $(this).outerHeight("100%");

                imageContainerHeight = $('#imageContainer').outerHeight();

                $(this).click(function(){
                    doSwap(this);
                });
            }
        });
        if (options['auto_scroll_enabled'] === true) {
            var tid = setInterval(function(){
               doSwap();
            }, parseInt(options['auto_scroll_time'])*1000);
        }
        
        var doSwap = function(el){
            if (el) {
                var id = $(el).attr('id').match(/divSwappingBanner\-image\-([0-9]{1})/);
                var divNumber = id[1];
            } else if (currentVisible) {
                if (currentVisible >= numberOfImages) {
                    var divNumber = 1;
                } else {
                    var divNumber = parseInt(currentVisible) + 1;
                }
            } else {
                var divNumber = 1;
            }
            
            if (currentVisible !== "undefined" && currentVisible !== divNumber) {
                $("#divSwappingBanner-div-"+currentVisible).fadeOut();
            }

            $("#divSwappingBanner-div-"+divNumber).fadeIn();
            currentVisible = divNumber;
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
    };
})(jQuery);