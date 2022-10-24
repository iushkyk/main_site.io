$(function(){
    $('.design-slider').slick({
        slidesToShow: 4,
        variableWidth: true,
         prevArrow: '<img src="icons/arrow-left.svg" alt="arrowleft" class="arrow arrow-left">',
         nextArrow: '<img src="icons/arrow-right.svg" alt="arrowright" class="arrow arrow-right">',
         responsive: [
             {
                 breakpoint: 361,
                 settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                 }
             }
         ]
    });
});