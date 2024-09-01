sPerView = 5.5;
spaceBetween = 40;
if(window.innerWidth < 1200) {
    sPerView = 4.5;
    spaceBetween = 35;
}
if(window.innerWidth < 901) {
    sPerView = 3.5;
    spaceBetween = 30;
}
if(window.innerWidth < 601) {
    sPerView = 2.5;
    spaceBetween = 25;
}
if(window.innerWidth < 401) {
    sPerView = 1.5;
    spaceBetween = 20;
}
let swiper = new Swiper(".mySwiper", {
    slidesPerView: sPerView,
    spaceBetween: spaceBetween,
    freeMode: true,
    grabCursor: true,
    initialSlide: 0,
    loop: true,
    speed: 600,
    /*autoplay: {
        delay: 5000,
    },*/
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* ВЫБОР МАСТЕРА */

sPerView3 = 3.2;
spaceBetween3 = 10;

if(window.innerWidth < 851) {
    sPerView3 = 3;
    spaceBetween3 = 10;
}

if(window.innerWidth < 801) {
    sPerView3 = 2.85;
    spaceBetween3 = 10;
}

if(window.innerWidth < 751) {
    sPerView3 = 2.675;
    spaceBetween3 = 10;
}

if(window.innerWidth < 701) {
    sPerView3 = 2.48;
    spaceBetween3 = 10;
}

if(window.innerWidth < 651) {
    sPerView3 = 2.275;
    spaceBetween3 = 10;
}

if(window.innerWidth < 601) {
    sPerView3 = 2.1;
    spaceBetween3 = 10;
}

if(window.innerWidth < 551) {
    sPerView3 = 1.93;
    spaceBetween3 = 10;
}

if(window.innerWidth < 501) {
    sPerView3 = 1.72;
    spaceBetween3 = 10;
}

if(window.innerWidth < 451) {
    sPerView3 = 1.53;
    spaceBetween3 = 10;
}

if(window.innerWidth < 401) {
    sPerView3 = 1.32;
    spaceBetween3 = 10;
}

if(window.innerWidth < 351) {
    sPerView3 = 1.13;
    spaceBetween3 = 10;
}

if(window.innerWidth < 321) {
    sPerView3 = 1;
    spaceBetween3 = 10;
}

let swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: sPerView3,
    spaceBetween: spaceBetween3,
    freeMode: true,
    grabCursor: true,
    initialSlide: 0,
    loop: false,
    speed: 600,
    /*autoplay: {
        delay: 4000,
    },*/
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* ВЫБОР РАБОТЫ */

sPerView4 = 1.62;
spaceBetween4 = 10;

if(window.innerWidth < 851) {
    sPerView4 = 2;
    spaceBetween4 = 10;
}

if(window.innerWidth < 801) {
    sPerView4 = 1.94;
    spaceBetween4 = 10;
}

if(window.innerWidth < 751) {
    sPerView4 = 1.82;
    spaceBetween4 = 10;
}

if(window.innerWidth < 701) {
    sPerView4 = 1.67;
    spaceBetween4 = 10;
}

if(window.innerWidth < 651) {
    sPerView4 = 1.566;
    spaceBetween4 = 10;
}

if(window.innerWidth < 601) {
    sPerView4 = 1.433;
    spaceBetween4 = 10;
}

if(window.innerWidth < 551) {
    sPerView4 = 1.3;
    spaceBetween4 = 10;
}

if(window.innerWidth < 501) {
    sPerView4 = 1.18;
    spaceBetween4 = 10;
}

if(window.innerWidth < 451) {
    sPerView4 = 1.05;
    spaceBetween4 = 10;
}

if(window.innerWidth < 401) {
    sPerView4 = 1;
    spaceBetween4 = 10;
}

let swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: sPerView4,
    spaceBetween: spaceBetween4,
    freeMode: true,
    grabCursor: true,
    initialSlide: 0,
    loop: false,
    speed: 600,
    /*autoplay: {
        delay: 4000,
    },*/
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});