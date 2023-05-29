document.querySelector(".bars__menu").addEventListener("click", animateBars)

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var menu__desplegable = document.querySelector("#menu__desplegable-nav");
var bars__menu = document.querySelector ("#bars__menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    

}

bars__menu.addEventListener("click", () => {
    menu__desplegable.classList.toggle("visible");
})

const slider = document.querySelector("#slider");
let slider__section = document.querySelectorAll(".slider__section");
let slider__sectionLast = slider__section[slider__section.length-1];

const slider__botonLeft = document.querySelector("#slider__btn-left");
const slider__botonRight = document.querySelector("#slider__btn-right");

slider.insertAdjacentElement('afterbegin', slider__sectionLast);

function slider__next(){
    let slider__sectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-224.9%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', slider__sectionFirst)
        slider.style.marginLeft = "-112.4%";  
    }, 500);
}

slider__botonRight.addEventListener('click', function(){
    slider__next();
});

function slider__prev(){
    let slider__section = document.querySelectorAll(".slider__section");
    let slider__sectionLast = slider__section[slider__section.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', slider__sectionLast);
        slider.style.marginLeft = "-112.4%";  
    }, 500);
}

slider__botonLeft.addEventListener('click', function(){
    slider__prev();
});





