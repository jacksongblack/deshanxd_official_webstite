(function($){
    $(document).ready(
        function(){
        $(".page-team-menber a").click(function(){
            $(".page-team-list").show();
            $(".page-team-list-background").show();
           var current_click = $(this).attr("img-url");
           $(".page-team-head-list li a").each(
               function(){
               if($(this).attr("data-img") === current_click){
                   $(this).trigger('mouseenter');
               }
           }
           );
        });
        $(".page-team-close").click(function(){
            $(".page-team-list").hide();
            $(".page-team-list-background").hide();
        });
        $(".page-team-head-list a").hover(
            function(){
            var hover_link = this;
            $(".page-team-head-list a").each(
                function(){
                if(this === hover_link){
                    $(this).attr("style","opacity:1;");
                }else{
                    $(this).attr("style","opacity:0.5;");
                }
            }
            ); 
            var img_url = $(this).attr("data-img");
            $(".page-team-img img").each(
                function(){
                if ($(this).attr("src") === img_url || $(this).attr("src") == "images/close.png" ){
                    $(this).show();
                }else{
                    $(this).hide();
                } 
            } 
            );  
        }  
        );
        $(".page-navigation a").hover(
            function(){
            var img_url = $(this).attr("img-url");
            $(".nav-radius").each(
               function(){
               if ($(this).children("img").attr("src") == img_url){
                   $(this).show();
               }else{
                  $(this).hide();
               }
           }
           );  
        }
        );
        $(".page-profile div").each(
            function(){
                var current_div = this;
            $(this).hover(
                function(){
                $(".page-profile div").each(function(){
                    if (this === current_div){
                $(this).children(".page-profile-text").show();
                    }else{
                $(this).children(".page-profile-text").hide();
                    }
                });
            }  
            );
        }
        );
    }
    );
})(jQuery);
