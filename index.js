function InitSwiper(){
    new Swiper('.swiper-container', {
        // Настройки Swiper.js
        wrapperClass: "menu__logoCont",
        slidesPerView: "auto", // нужное количество элементов на слайде
        spaceBetween: 20, 
        pagination:{
            el:'.swiper-pagination',
            clickable:true,
            },
    });
};

window.innerWidth < 768 ? InitSwiper() : null;


const readMoreButton = document.querySelector('.readMore-button');
const menu = document.querySelector('.menu');
const logoCont = document.querySelector('.menu__logoCont');
const readMoreButtonExpand = readMoreButton.querySelector('.readMore-button-expand');

readMoreButton.addEventListener('click', function(){
    if (menu.style.overflow === 'hidden') {
        menu.style.overflow = 'visible';
        logoCont.style.height = 'auto';
        readMoreButton.querySelector('.readMore-button-descrip').textContent = 'Скрыть';
        readMoreButtonExpand.style.transform = 'rotate(180deg)';
    } else {
        menu.style.overflow = 'hidden';
        logoCont.style.height = '165px';
        readMoreButton.querySelector('.readMore-button-descrip').textContent = 'Показать все';
        readMoreButtonExpand.style.transform = 'rotate(0deg)';
    }
})