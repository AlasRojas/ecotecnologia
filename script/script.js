$( document ).ready(function() {

    var total_width = $(window).width();
    var total_height = $(window).height();

    $( window ).resize(function() {
        total_width = $(window).width();
        total_height = $(window).height();
        size_cont();
    });

    function size_cont(){
    };

    size_cont();


    /*Funcion del moviemiento del slider del index*/

    var slides = $(".slider_elemet").length;
    var active_slide;
    var slider_move;
   


    function auto_slider(){
        slider_move = setInterval(function(){ change_next_slide(); }, 7000);
    }
    auto_slider();  
    
    function change_next_slide(){
        active_slide = $(".slider_elemet.active").index();
        var next_slide = active_slide+1;
        if(next_slide >= slides ){
            next_slide = 0;
        }
        $(".slider_elemet").removeClass("active");
        $(".slider_elemet").eq(next_slide).addClass("active");
    }


    $(".calentadores_solares_list").click(function(){
        $("html, body").stop().animate({ scrollTop: $('.calentadores_solares_tittle').offset().top -50}, 1000);
    });

    $(".boiler_paso_list").click(function(){
        $("html, body").stop().animate({ scrollTop: $('.boiler_paso_tittle').offset().top -50}, 1000);
    });
    

});