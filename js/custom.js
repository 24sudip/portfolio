$(function(){

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop()
        if(scrolling > 50){
            $(".menu_bg").addClass("nav_bg")
        }else{
            $(".menu_bg").removeClass("nav_bg")
        }

        if(scrolling > 30){
            $(".back_to_top").fadeIn(500)
        }else{
            $(".back_to_top").fadeOut(500)
        }
    });

    $(".back_to_top").click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 2000)
    });

    $(function(){
        $(".typed").typed({
            strings: ["Designer.", "<span class='one'>Worker.</span>", "<span class='two'>Person.</span>"],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: true,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.market_main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        arrows:true,
        prevArrow:".prev",
        nextArrow:".next",
        responsive: [
        {
          breakpoint: 575.99,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              speed: 1000,
              arrows:false            
          }
        },  
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            arrows:false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            arrows:false
          }
        }           
      ]
    });

    new WOW().init();

    $('.percent').percentageLoader({
        valElement: 'p',
        strokeWidth: 8,
        bgColor: '#d9d9d9',
        ringColor: 'greenyellow',
        textColor: '#9a9a9a',
        fontSize: '12px',
        fontWeight: 'normal'
      });
      $('.percent1').percentageLoader({
        valElement: 'p',
        strokeWidth: 8,
        bgColor: '#d9d9d9',
        ringColor: 'greenyellow',
        textColor: '#9a9a9a',
        fontSize: '12px',
        fontWeight: 'normal'
      });

      $('.edu_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        speed:1000,
        autoplay:true,
        asNavFor: '.exper_main'
      });

      $('.exper_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        speed:1000,
        autoplay:true,
        asNavFor: '.edu_main'
      });

      $('.design_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        speed:1000,
        autoplay:true,
        asNavFor: '.devel_main',
        vertical:true
      });

      $('.devel_main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        speed:1000,
        autoplay:true,
        asNavFor: '.design_main',
        vertical:true
      });

});
