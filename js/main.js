$(function(){
    $(".before-after ").twentytwenty({
      before_label: 'Without Skinali',
      after_label: 'With Skinali',
    });

    $('.before-slider').slick({
      draggable: false,
      dots: true,
      dotsClass: 'before-slider__dots',
      prevArrow: $('.arrow-left'),
      nextArrow: $('.arrow-right'),
    });

    $('.reviews-slider').slick({
        draggable: false,
        dots: false,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right'),
      });

    

    $('.form__select').on('click', function(){
        $('.select__dropdown').toogleClass('select__dropdown_open');
    });

    $('.hamburger').on('click', function(){
      $('.menu').toggleClass('menu_active');
    });

    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top - 120 + "px" }, 1000);
        return false;
    });

    $('[type="tel"]').mask("+7 (999) 999-99-99");

    
   
  });