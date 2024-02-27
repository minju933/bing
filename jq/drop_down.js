$(document).ready(function(){
    $(".header").on('mouseenter', function(){
        $("header").css({height:"620px"})
        setTimeout(function(){
            $(".submenu_all").css({display:'flex'})
        },300)
    });
    $(".header").on('mouseleave', function(){
        $(".submenu_all").css({display:'none'})
        setTimeout(function(){
            $("header").css({height:"0px"})
        },300)
    });
    
    $("header").on("mouseenter",function(){
        $("header").css({height:"620px"})
        $(".submenu_all").css({opacity:"1"})
    })
    $("header").on("mouseleave",function(){
        $("header").css({height:"0px"})
        $(".submenu_all").css({opacity:"0"})
    })
});
