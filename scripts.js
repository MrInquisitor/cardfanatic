//adding use strict globally
"use strict";
// code for hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu")

hamburger.addEventListener("click", hamburgerMenu);

function hamburgerMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// End of code for ham burger menu

//code for slider
let slideIndex = 1;
    showSlides(slideIndex);

//controls for buttons
function plusSlides(curSlide) {
    showSlides(slideIndex += curSlide);
}
//showing current slide
function currentSlide(curSlide) {
    showSlides(slideIndex = curSlide)
}

function showSlides(curSlide) {
    let i;
    let slides = document.getElementsByClassName("slide");
     if (curSlide > slides.length) {
        slideIndex = 1;
     }
     if(curSlide < 1) {
        slideIndex = slides.length;
     }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    slides[slideIndex-1].style.display="block";
}
//End of code for slider
