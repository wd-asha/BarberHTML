let slides = document.querySelector('#slides');
let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');
let slide3 = document.querySelector('#slide3');
let pag1 = document.querySelector('#pag1');
let pag2 = document.querySelector('#pag2');
let pag3 = document.querySelector('#pag3');
let slideLeft1 = document.querySelector('#slideLeft1');
let slideLeft2 = document.querySelector('#slideLeft2');
let slideLeft3 = document.querySelector('#slideLeft3');
let headerRightContacts = document.querySelector('#headerRightContacts');
let nav = document.querySelector('#nav')

setTimeout(function() {
    slideLeft1.classList.add('slideLeftShow')}, 1500);
setTimeout(function() {
    nav.classList.add('navShow')}, 500);
setTimeout(function() {
    headerRightContacts.classList.add('headerRightContactsShow')}, 1000);

pag1.addEventListener('click', function () {
    this.classList.add('pagination__item-active');
    pag2.classList.remove('pagination__item-active');
    pag3.classList.remove('pagination__item-active');
    slide1.classList.remove('hideSlide1');
    if(slide2.getAttribute('data-active') === '1') {
        slide1.setAttribute('data-active', '1');
        slide2.setAttribute('data-active', '0');
        slides.classList.remove('showSlide1from3');
        slides.classList.remove('showSlide2from1');
        slides.classList.remove('showSlide2from3');
        slides.classList.remove('showSlide3from1');
        slides.classList.remove('showSlide3from2');
        slides.classList.add('showSlide1from2');
        slideLeft2.classList.add('slideLeftHide');
        setTimeout(function() {
            slideLeft1.classList.add('slideLeftShow');
            slideLeft2.classList.remove('slideLeftShow');
            slideLeft2.classList.remove('slideLeftHide');
        }, 1000);
    }
    if(slide3.getAttribute('data-active') === '1') {
        slide3.setAttribute('data-active', '0');
        slide1.setAttribute('data-active', '1');
        slide2.classList.remove('hideSlide2');
        slide3.classList.remove('hideSlide3');
        slides.classList.remove('showSlide1from2');
        slides.classList.remove('showSlide2from1');
        slides.classList.remove('showSlide2from3');
        slides.classList.remove('showSlide3from1');
        slides.classList.remove('showSlide3from2');
        slides.classList.add('showSlide1from3');
        slideLeft3.classList.add('slideLeftHide');
        setTimeout(function() {
            slideLeft1.classList.add('slideLeftShow');
            slideLeft3.classList.remove('slideLeftShow');
            slideLeft3.classList.remove('slideLeftHide');
        }, 1000);
    }
});

pag2.addEventListener('click', function () {
    this.classList.add('pagination__item-active');
    pag1.classList.remove('pagination__item-active');
    pag3.classList.remove('pagination__item-active');
    setTimeout(function() {
        slide1.classList.add('hideSlide1');
    }, 800);
    if(slide1.getAttribute('data-active') === '1') {
        slide1.setAttribute('data-active', '0');
        slide2.setAttribute('data-active', '1');
        setTimeout(function() {
            slide1.classList.add('hideSlide1');
        }, 600);
        slides.classList.remove('showSlide1from2');
        slides.classList.remove('showSlide1from3');
        slides.classList.remove('showSlide2from3');
        slides.classList.remove('showSlide3from1');
        slides.classList.remove('showSlide3from2');
        slides.classList.add('showSlide2from1');
        slideLeft1.classList.add('slideLeftHide');
        setTimeout(function() {
            slideLeft2.classList.add('slideLeftShow');
            slideLeft1.classList.remove('slideLeftHide');
            slideLeft1.classList.remove('slideLeftShow');
        }, 1000);
    }
    if(slide3.getAttribute('data-active') === '1') {
        slide3.setAttribute('data-active', '0');
        slide2.setAttribute('data-active', '1');
        slide2.classList.remove('hideSlide2');
        setTimeout(function() {
            slide3.classList.add('hideSlide3');
        }, 600);
        slides.classList.remove('showSlide1from2');
        slides.classList.remove('showSlide1from3');
        slides.classList.remove('showSlide2from1');
        slides.classList.remove('showSlide3from1');
        slides.classList.remove('showSlide3from2');
        slides.classList.add('showSlide2from3');
        slideLeft3.classList.add('slideLeftHide');
        setTimeout(function() {
            slideLeft2.classList.add('slideLeftShow');
            slideLeft3.classList.remove('slideLeftHide');
            slideLeft3.classList.remove('slideLeftShow');
        }, 1000);
    }
});

pag3.addEventListener('click', function () {
    this.classList.add('pagination__item-active');
    pag1.classList.remove('pagination__item-active');
    pag2.classList.remove('pagination__item-active');
    slide2.classList.remove('hideSlide2');
    slide3.classList.remove('hideSlide3');
    slide1.classList.remove('hideSlide1');
    slide1.classList.add('hideSlide1');

    if(slide1.getAttribute('data-active') === '1') {
        slide1.setAttribute('data-active', '0');
        slide3.setAttribute('data-active', '1');
        setTimeout(function() {
            slide2.classList.add('hideSlide2');
        }, 600);
        slides.classList.remove('showSlide1from2');
        slides.classList.remove('showSlide1from3');
        slides.classList.remove('showSlide2from1');
        slides.classList.remove('showSlide2from3');
        slides.classList.remove('showSlide3from1');
        slides.classList.add('showSlide3from1');
        slideLeft1.classList.add('slideLeftHide');
        setTimeout(function() {
            slideLeft3.classList.add('slideLeftShow');
            slideLeft1.classList.remove('slideLeftHide');
            slideLeft1.classList.remove('slideLeftShow');
        }, 1000);
    }
    if(slide2.getAttribute('data-active') === '1') {
        slide2.setAttribute('data-active', '0');
        slide3.setAttribute('data-active', '1');
        slide1.classList.remove('hideSlide1');
        slide3.classList.remove('hideSlide3');
        setTimeout(function() {
            slide2.classList.add('hideSlide2');
        }, 800);
        slides.classList.remove('showSlide1from2');
        slides.classList.remove('showSlide1from3');
        slides.classList.remove('showSlide2from1');
        slides.classList.remove('showSlide2from3');
        slides.classList.remove('showSlide3from1');
        slides.classList.add('showSlide3from2');
        slideLeft2.classList.add('slideLeftHide');
        setTimeout(function() {
            slideLeft3.classList.add('slideLeftShow');
            slideLeft2.classList.remove('slideLeftHide');
            slideLeft2.classList.remove('slideLeftShow');
        }, 1000);
    }
});