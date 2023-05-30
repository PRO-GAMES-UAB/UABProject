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

//slider

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

setInterval(function(){
    slider__next();
}, 7000);

//slider 2

const slider2 = document.querySelector("#slider2");
let slider__section2 = document.querySelectorAll(".slider__section2");
let slider__sectionLast2 = slider__section2[slider__section2.length-1];

const slider__botonLeft2 = document.querySelector("#slider__btn-left2");
const slider__botonRight2 = document.querySelector("#slider__btn-right2");

slider2.insertAdjacentElement('afterbegin', slider__sectionLast2);

function slider__next2(){
    let slider__sectionFirst2 = document.querySelectorAll(".slider__section2")[0];
    slider2.style.marginLeft = "-224.9%";
    slider2.style.transition = "all 0.5s";
    setTimeout(function(){
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('beforeend', slider__sectionFirst2)
        slider2.style.marginLeft = "-112.4%";  
    }, 500);
}

slider__botonRight2.addEventListener('click', function(){
    slider__next2();
});

function slider__prev2(){
    let slider__section2 = document.querySelectorAll(".slider__section2");
    let slider__sectionLast2 = slider__section2[slider__section2.length-1];
    slider2.style.marginLeft = "0";
    slider2.style.transition = "all 0.5s";
    setTimeout(function(){
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('afterbegin', slider__sectionLast2);
        slider2.style.marginLeft = "-112.4%";      
    }, 500);
}

slider__botonLeft2.addEventListener('click', function(){
    slider__prev2();
});

setInterval(function(){
    slider__next2();
}, 7000);


//slider 3

const slider3 = document.querySelector("#slider3");
let slider__section3 = document.querySelectorAll(".slider__section3");
let slider__sectionLast3 = slider__section3[slider__section3.length-1];

const slider__botonLeft3 = document.querySelector("#slider__btn-left3");
const slider__botonRight3 = document.querySelector("#slider__btn-right3");

slider3.insertAdjacentElement('afterbegin', slider__sectionLast3);

function slider__next3(){
    let slider__sectionFirst3 = document.querySelectorAll(".slider__section3")[0];
    slider3.style.marginLeft = "-224.9%";
    slider3.style.transition = "all 0.5s";
    setTimeout(function(){
        slider3.style.transition = "none";
        slider3.insertAdjacentElement('beforeend', slider__sectionFirst3)
        slider3.style.marginLeft = "-112.4%";  
    }, 500);
}

slider__botonRight3.addEventListener('click', function(){
    slider__next3();
});

function slider__prev3(){
    let slider__section3 = document.querySelectorAll(".slider__section3");
    let slider__sectionLast3 = slider__section3[slider__section3.length-1];
    slider3.style.marginLeft = "0";
    slider3.style.transition = "all 0.5s";
    setTimeout(function(){
        slider3.style.transition = "none";
        slider3.insertAdjacentElement('afterbegin', slider__sectionLast3);
        slider3.style.marginLeft = "-112.4%";      
    }, 500);
}

slider__botonLeft3.addEventListener('click', function(){
    slider__prev3();
});

setInterval(function(){
    slider__next3();
}, 7000);

