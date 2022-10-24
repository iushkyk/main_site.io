window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__links'),
        menuItem = document.querySelectorAll('.header__links-item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active');
        menu.classList.toggle('header__links--active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger--active');
            menu.classList.toggle('header__links--active');
        });
    });

    //carousel
    $('.sites__wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.svg"></button>',
        responsive: [
            {
              breakpoint: 1430,
              settings: {
                arrows: false,
                dots: true
              }
            },
          ]
    });

});