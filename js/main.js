$(function(){
    $('.depth02').hide();
    $('nav > ul > li').mouseover(function(){
        $(this).children('.depth02').stop().slideDown();
    });
    $('nav > ul > li, .depth02').mouseout(function(){
        $('.depth02').stop().slideUp();
    });


    //cont01 탭메뉴
    $('.tab_list li').click(function(){
        $('.tab_list li').removeClass('on');
        $(this).addClass('on');
        $('.tab_cont li').removeClass('on');
        $('.tab_cont li').eq($(this).index()).addClass('on');
    });

    //스크롤했을 때 컨텐츠 애니메이션 적용
    $(window).scroll(function(){
        $('.cont01').each(function(i){
            var scrollWindow = $(window).scrollTop() + $(window).height();
            var scrollCont = $('.cont01').offset().top + $('.cont01').height(); 
            if (scrollWindow >= scrollCont) {
                $(this).delay(500).animate({'opacity' : '1'}, 500);
            }  
        });
    });

    //cont02 마우스올렸을 때 배경이미지 교체
    $('.cont02 article').mouseenter(function(){
        $(this).addClass('on');
        $('.cont02_bg > div').stop().fadeOut();
        $('.cont02_bg > div').eq($(this).index()).stop().fadeIn();
    });
    $('.cont02 article').mouseleave(function(){
        $(this).removeClass('on');
        $('.cont02_bg > div').stop().fadeOut();
    });

});