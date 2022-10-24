let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');

})

let close = document.querySelector('.menu__close');

close.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
    }
});



// etaps slider

const first = document.querySelector('#first'),
    second = document.querySelector('#second'),
    firstList = document.querySelector('#firstList'),
    secondList = document.querySelector('#secondList'),
    firstListMob = document.querySelector('#firstListMob'),
    secondListMob = document.querySelector('#secondListMob');

function press(el, del, list, otherList) {


    el.addEventListener('click', () => {

        if (el === first) {
            el.classList.add('etaps__left-period--active');
            del.classList.remove('etaps__left-period--active');
            list.classList.add('etaps__right-list--noactive');
            otherList.classList.remove('etaps__right-list--noactive');
        } else {
            el.classList.add('etaps__left-period--active');
            del.classList.remove('etaps__left-period--active');
            list.classList.add('etaps__right-list--noactive');
            otherList.classList.remove('etaps__right-list--noactive');
        }

    });


}

press(first, second, secondList, firstList);
press(second, first, firstList, secondList);


function pressMobile(el) {

    el.addEventListener('click', () => {

        if (el === first) {
            firstListMob.classList.remove('etaps__list-no');
            firstListMob.classList.add('etaps__list-yes');
            secondListMob.classList.remove('etaps__list-yes');
            secondListMob.classList.add('etaps__list-no');
        } else {
            secondListMob.classList.remove('etaps__list-no');
            secondListMob.classList.add('etaps__list-yes');
            firstListMob.classList.remove('etaps__list-yes');
            firstListMob.classList.add('etaps__list-no');
        }
    });
}

pressMobile(first);
pressMobile(second);


//Modal

$('[data-modal=consultation]').on('click', () => {
    $(' #consultation').fadeIn('slow');
});

function closeModal(e){
    $(e).on('click', ()=> {
        $('#consultation, #thanks').fadeOut('slow');
    });
}

closeModal('.modal__close');
closeModal('.modal');


$(document).keyup(()=> {
    $('#consultation, #thanks').fadeOut('slow');
})

$('.modal__content').on('click', function(event) {
    event.stopPropagation();
  });
