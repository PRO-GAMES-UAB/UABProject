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


