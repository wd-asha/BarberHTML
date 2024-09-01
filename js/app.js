let burger = document.querySelector('#burger');
let masterOpenBtn1 = document.querySelector('#masterOpenBtn1');
let mobileMenuPanel = document.querySelector('#mobileMenuPanel');
let masterPanel = document.querySelector('#masterPanel');
let burgerClose = document.querySelector('#burgerClose');
let masterClose = document.querySelector('#masterClose');
let overlay = document.querySelector('#overlay');
let tabTop = document.querySelector('#tabTop');
let tabFront = document.querySelector('#tabFront');
let tabBottom = document.querySelector('#tabBottom');
let cube = document.querySelector('#cube');
let mobileLinks = document.querySelectorAll('.mobile__link');
let tabs = document.querySelectorAll('.tab');
let radio1 = document.querySelector('#radio-1');
let radio2 = document.querySelector('#radio-2');
let radio3 = document.querySelector('#radio-3');
let radio4 = document.querySelector('#radio-4');
let radio5 = document.querySelector('#radio-5');
let radio6 = document.querySelector('#radio-6');
let radio41 = document.querySelector('#radio-41');
let radio42 = document.querySelector('#radio-42');
let radio43 = document.querySelector('#radio-43');
let radio44 = document.querySelector('#radio-44');
let radio31 = document.querySelector('#radio-31');
let radio32 = document.querySelector('#radio-32');
let radio33 = document.querySelector('#radio-33');
let radio34 = document.querySelector('#radio-34');
let radio35 = document.querySelector('#radio-35');
let radio36 = document.querySelector('#radio-36');
let radio37 = document.querySelector('#radio-37');
let radio38 = document.querySelector('#radio-38');
let radio39 = document.querySelector('#radio-39');
let radio40 = document.querySelector('#radio-40');
let labelFront = document.querySelector('#labelFront');
let labelTop = document.querySelector('#labelTop');
let labelBottom = document.querySelector('#labelBottom');
let timeTitle = document.querySelector('#timeTitle');
let masterLink = document.querySelector('#masterLink');
let backCallAction = document.querySelector('.back__call__action');
let inputs = document.querySelectorAll('input[type="radio"]');
let timeBoxes = document.querySelectorAll('.timeBox');
let serviceLinks = document.querySelectorAll('.service__link');


function masterLinkShow() {
    if((labelTop.textContent !== 'РАБОТА') && (labelFront.textContent !== 'МАСТЕР') && (labelBottom.textContent !== 'ВРЕМЯ')) {
        masterLink.style.opacity = 1;
        masterLink.style.visibility = 'visible';
    }
}

function timeBoxesClear() {
    timeBoxes.forEach((item) => {
        item.style.backgroundColor = 'rgba(0, 80, 0, .5)';
    })
}

radio1.addEventListener('click', function (e) {
    labelFront.innerHTML = 'АРСЕН';
    masterLinkShow();
});
radio2.addEventListener('click', function (e) {
    labelFront.innerHTML = 'ГЕОРГИЙ';
    masterLinkShow();
});
radio3.addEventListener('click', function (e) {
    labelFront.innerHTML = 'ЕВГЕНИЙ';
    masterLinkShow();
});
radio4.addEventListener('click', function (e) {
    labelFront.innerHTML = 'АРТЕМ';
    masterLinkShow();
});
radio5.addEventListener('click', function (e) {
    labelFront.innerHTML = 'АЛЕКСАНДР';
    masterLinkShow();
});
radio6.addEventListener('click', function (e) {
    labelFront.innerHTML = 'ДМИТРИЙ';
    masterLinkShow();
});
radio41.addEventListener('click', function (e) {
    labelTop.innerHTML = 'СТРИЖКА';
    masterLinkShow();
});
radio42.addEventListener('click', function (e) {
    labelTop.innerHTML = 'СТРИЖКА';
    masterLinkShow();
});
radio43.addEventListener('click', function (e) {
    labelTop.innerHTML = 'ДЕТСКАЯ';
    masterLinkShow();
});
radio44.addEventListener('click', function (e) {
    labelTop.innerHTML = 'БРИТЬЕ';
    masterLinkShow();
});
radio31.addEventListener('click', function (e) {
    labelBottom.innerHTML = '08:00';
    masterLinkShow();
    timeBoxesClear();
    radio31.parentNode.parentNode.style.backgroundColor = 'black';
});
radio32.addEventListener('click', function (e) {
    labelBottom.innerHTML = '09:00';
    masterLinkShow();
    timeBoxesClear()
    radio32.parentNode.parentNode.style.backgroundColor = 'black';
});
radio33.addEventListener('click', function (e) {
    labelBottom.innerHTML = '10:00';
    masterLinkShow();
    timeBoxesClear()
    radio33.parentNode.parentNode.style.backgroundColor = 'black';
});
radio34.addEventListener('click', function (e) {
    labelBottom.innerHTML = '11:00';
    masterLinkShow();
    timeBoxesClear()
    radio34.parentNode.parentNode.style.backgroundColor = 'black';
});
radio35.addEventListener('click', function (e) {
    labelBottom.innerHTML = '12:00';
    masterLinkShow();
    timeBoxesClear()
    radio35.parentNode.parentNode.style.backgroundColor = 'black';
});
radio36.addEventListener('click', function (e) {
    labelBottom.innerHTML = '13:00';
    masterLinkShow();
    timeBoxesClear()
    radio36.parentNode.parentNode.style.backgroundColor = 'black';
});
radio37.addEventListener('click', function (e) {
    labelBottom.innerHTML = '14:00';
    masterLinkShow();
    timeBoxesClear()
    radio37.parentNode.parentNode.style.backgroundColor = 'black';
});
radio38.addEventListener('click', function (e) {
    labelBottom.innerHTML = '15:00';
    masterLinkShow();
    timeBoxesClear()
    radio38.parentNode.parentNode.style.backgroundColor = 'black';
});
radio39.addEventListener('click', function (e) {
    labelBottom.innerHTML = '16:00';
    masterLinkShow();
    timeBoxesClear()
    radio39.parentNode.parentNode.style.backgroundColor = 'black';
});
radio40.addEventListener('click', function (e) {
    labelBottom.innerHTML = '17:00';
    masterLinkShow();
    timeBoxesClear()
    radio40.parentNode.parentNode.style.backgroundColor = 'black';
});

function tabNotActive() {
    tabs.forEach((item) => {
        item.classList.remove('tab-active');
    });
}

tabs.forEach((item) => {
    item.addEventListener('click', function () {
        tabNotActive();
        item.classList.add('tab-active');
    });
});

tabTop.addEventListener('click', function () {
    cube.classList.remove('tabFront');
    cube.classList.remove('tabBottom');
    cube.classList.add('tabTop')
});
tabFront.addEventListener('click', function () {
    cube.classList.remove('tabTop');
    cube.classList.remove('tabBottom');
    cube.classList.add('tabFront')
});
tabBottom.addEventListener('click', function () {
    cube.classList.remove('tabFront');
    cube.classList.remove('tabTop');
    cube.classList.add('tabBottom');
    let currentDate = new Date();
    timeTitle.innerHTML = ""
        + currentDate.getDate() + '.'
        + (currentDate.getMonth() + 1) + '.'
        + currentDate.getFullYear();
});


mobileLinks.forEach((item) => {
    item.addEventListener('click', function () {
        overlay.classList.remove('overlay-show');
        overlay.classList.add('overlay-hide');
        mobileMenuPanel.classList.remove('open__mobile');
    });
});

burger.addEventListener('click', function () {
    mobileMenuPanel.classList.add('open__mobile');
    overlay.classList.remove('overlay-hide');
    overlay.classList.add('overlay-show');

});
burgerClose.addEventListener('click', function () {
    mobileMenuPanel.classList.remove('open__mobile');
    overlay.classList.remove('overlay-show');
    overlay.classList.add('overlay-hide');
});

masterOpenBtn1.addEventListener('click', function (e) {
    e.preventDefault();
    timeBoxesClear();
    inputs.forEach((item) => {
        item.checked = false;
    });
    labelTop.innerHTML = 'РАБОТА';
    labelFront.innerHTML = 'МАСТЕР';
    labelBottom.innerHTML = 'ВРЕМЯ';
    masterLink.style.opacity = 0;
    masterLink.style.visibility = 'hidden';
    masterPanel.classList.add('open__master');
    overlay.classList.remove('overlay-hide');
    overlay.classList.add('overlay-show');
    /*posTop = window.pageYOffset;*/
    /*document.body.classList.add('no-scroll');*/
    /* Прокрутка ставится на паузу */
});

backCallAction.addEventListener('click', function (e) {
    e.preventDefault();
    timeBoxesClear();
    inputs.forEach((item) => {
        item.checked = false;
    });
    labelTop.innerHTML = 'РАБОТА';
    labelFront.innerHTML = 'МАСТЕР';
    labelBottom.innerHTML = 'ВРЕМЯ';
    masterLink.style.opacity = 0;
    masterLink.style.visibility = 'hidden';
    masterPanel.classList.add('open__master');
    overlay.classList.remove('overlay-hide');
    overlay.classList.add('overlay-show');
});

serviceLinks.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        timeBoxesClear();
        inputs.forEach((item) => {
            item.checked = false;
        });
        labelTop.innerHTML = 'РАБОТА';
        labelFront.innerHTML = 'МАСТЕР';
        labelBottom.innerHTML = 'ВРЕМЯ';
        masterLink.style.opacity = 0;
        masterLink.style.visibility = 'hidden';
        masterPanel.classList.add('open__master');
        overlay.classList.remove('overlay-hide');
        overlay.classList.add('overlay-show');
    })
});

masterClose.addEventListener('click', function () {
    masterPanel.classList.remove('open__master');
    overlay.classList.remove('overlay-show');
    overlay.classList.add('overlay-hide');
    /*document.body.classList.remove('no-scroll');*/
    /* Прокрутка возобновляется */
    /*window.scrollTo(0, posTop);*/
});

masterLink.addEventListener('click', function () {
    masterPanel.classList.remove('open__master');
    overlay.classList.remove('overlay-show');
    overlay.classList.add('overlay-hide');
    /*document.body.classList.remove('no-scroll');*/
    /* Прокрутка возобновляется */
    /*window.scrollTo(0, posTop);*/
});