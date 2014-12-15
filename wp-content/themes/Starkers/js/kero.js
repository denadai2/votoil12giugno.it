$().ready(function() {


    $('a.tip').poshytip({
	className: 'tip-twitter',
	showTimeout: 1,
	alignTo: 'target',
	alignX: 'center',
	offsetY: 5,
	allowTipHover: false,
	fade: false,
            slide: false
    });

    $(".avatar a").hover(
        function(){
            $(this).parent().parent().find(".infoBubble").show();
        },
        function(){
            $(this).parent().parent().find(".infoBubble").hide();
        }
    );

    if(!Modernizr.csscolumns){
         $.getScript("/wp-content/themes/Starkers/js/autocolumn.min.js", function(){
             $('.multicolonna').columnize({ columns: 2 });
            Hyphenator.config({
                        minwordlength : 4
                });
            Hyphenator.run();
        });
    }
    else {
        Hyphenator.config({
                        minwordlength : 4
                });
        Hyphenator.run();
    }
    

});
      