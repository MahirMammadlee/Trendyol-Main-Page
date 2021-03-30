$(function(){

    $("#sticky").clone().appendTo("#fading-header");

    $(window).on('scroll', function() {

      if ($(this).scrollTop() > 200) {
        $("#fading-header").fadeIn();
        $('.header-top').hide();
        $('.header>#sticky').hide();

      } else if ($(this).scrollTop() < 64){

        $('.header>#sticky').show();
        $('.header-top').show();
        $("#fading-header").css("display","none");

      }
    });

    $(".account-list>div").hover(function(){

        $(this).children().first().children().first().addClass("d-none");
        $(this).children().first().children().last().removeClass("d-none");
        $(this).children().last().children().css("color","#f68428")

    },function(){

        $(this).children().first().children().last().addClass("d-none");
        $(this).children().first().children().first().removeClass("d-none");
        $(this).children().last().children().css("color","#212529")

    });

    $(".main-nav-item").hover(function(){

        $("body").css("background","#c1c1c1");
        $(this).children().css("border-bottom","3px solid #f68428");
        $(this).children().css("color","#f68428");

    },function(){

        $("body").css("background","#fff");
        $(this).children().css("border-bottom","none");
        $(this).children().css("color","#333");
    });

    $(".nav-tab").hover(function(){

        $("body").css("background","#c1c1c1");
        $(this).siblings().children().css("border-bottom","3px solid #f68428");
        $(this).siblings().children().css("color","#f68428");

    },function(){

        $("body").css("background","#fff");
        $(this).siblings().children().css("border-bottom","none");
        $(this).siblings().children().css("color","#333");
    });

    $(".circle-item").hover(function(){

        $(this).children(".circle").css("border","2px solid #f68428");
        $(this).children("div").css("color","#f68428");
    },function(){
        $(this).children(".circle").css("border","2px solid #e6e6e6");
        $(this).children("#circle1").css("border","2px solid #a101af");
        $(this).children("#circle2").css("border","2px solid #a101af");
        $(this).children("div").css("color","#212529");
        
    });

    let spanRightText=""
    $(".border-main-ad").hover(function(){

        spanRightText = $(this).children(".desc-main-ad").children("span.r-mr-15").text();

        $(this).children(".desc-main-ad").children("span.r-mr-15").text("Alışverişe Başla");
        $(this).children(".img-wrapper").children(".main-ad-img").css("transform", "scale(1.04)");
        $(this).css("border","1px solid #f68428");
        $(this).css("border-main","none");
        $(this).children(".desc-main-ad").css("background-color","#f68428");

    },function(){

        $(this).children(".desc-main-ad").children("span.r-mr-15").text(spanRightText);
        $(this).children(".img-wrapper").children(".main-ad-img").css("transform", "scale(1)");
        $(this).css("border","1px solid #d3d3d3");
        $(this).css("border-main","none");
        $(this).children(".desc-main-ad").css("background-color","#1b1b1b");

    });

    $(".border-bottom-ad").hover(function(){

        spanRightText = $(this).children(".desc-bottom-ad").children("span.r-mr-15").text();

        $(this).children(".desc-bottom-ad").children("span.r-mr-15").text("Alışverişe Başla");
        $(this).children(".img-wrapper").children(".bottom-ad-img").css("transform", "scale(1.04)");
        $(this).css("border","1px solid #f68428");
        $(this).css("border-bottom","none");
        $(this).children(".desc-bottom-ad").css("background-color","#f68428");

    },function(){

        $(this).children(".desc-bottom-ad").children("span.r-mr-15").text(spanRightText);
        $(this).children(".img-wrapper").children(".bottom-ad-img").css("transform", "scale(1)");
        $(this).css("border","1px solid #d3d3d3");
        $(this).css("border-bottom","none");
        $(this).children(".desc-bottom-ad").css("background-color","#1b1b1b");

    });

});

/************************************/
/******* Mahir Mammadlee ************/
/************************************/