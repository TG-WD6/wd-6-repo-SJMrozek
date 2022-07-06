const carouselSlide = document.querySelector(".carouselSlide");
const carouselImages = document.querySelectorAll(".carouselSlide img");

// Buttons
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

//Counter
let counter = 1;
const size = carouselImages[0].width;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

//Button Listeners

nextButton.addEventListener("click", function() {
    // if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`
})

prevButton.addEventListener("click", function() {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`
})

carouselSlide.addEventListener("transitionend", function() {
    if (carouselImages[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2 ;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`
    }
    if (carouselImages[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter ;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`
    }
})