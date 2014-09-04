 function imageAnimate(img){
        $.each(  [
            { opacity:"0.1"},
            { opacity:"0.3"},
            { opacity:"0.5"},
            { opacity:"0.7"},
            { opacity:"0.9"},
            { opacity:"1"}
        ],function(index,v){
            img.animate(v,"slow"); 
        });  

    }
(function($){
    $(document).ready( function(){ 
       imageAnimate($(".site-logo"));
       setTimeout("imageAnimate($('.site-home-link'))",1000);
    });
})(jQuery);


