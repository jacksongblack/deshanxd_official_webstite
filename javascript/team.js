(function($){
    $(document).ready(
        function(){
        $(".page-team-menber a").click(function(){
        $(".page-team-list").show();
        });
        $(".page-team-close").click(function(){
            $(".page-team-list").hide();
        });
    }
    )
})(jQuery);
