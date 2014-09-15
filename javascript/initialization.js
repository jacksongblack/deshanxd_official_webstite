(function($){
    $(document).ready(
        function(){
        if($(".page-logo").length + $('.page-home-link').length == 2){
            Animate("opecity_moves",".page-logo").start();
            Animate("opecity_moves",".page-home-link").delay(1000);
        }
        if($(".page-map-tag").length !== 0){
            Animate("opecity_moves",".page-map-tag").always();
        }
        if($(".page-yezhong-radius").length !== 0){
            Animate("opecity_moves",".page-yezhong-radius").start();     
            Animate("opecity_moves",".page-fengpei-radius").delay(1000);
            Animate("opecity_moves",".page-xiangke-radius").delay(1500);
            Animate("opecity_moves",".page-wugaomei-radius").delay(2000);
            Animate("opecity_moves",".page-tubing-radius").delay(2500);
            Animate("opecity_moves",".page-renxiangdong-radius").delay(3000);
            Animate("opecity_moves",".page-xiongyijie-radius").delay(3500);
        }
        //团队风采首页圈的鼠标点击效果
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
        //绑定团队风采鼠标悬停效果(单人显示模式)
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
        //绑定首页菜单鼠标悬停效果
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
        // 绑定公司简介鼠标悬浮效果
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
