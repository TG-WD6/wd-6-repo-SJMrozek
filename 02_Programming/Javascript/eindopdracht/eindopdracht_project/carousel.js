const carouselSlide = document.querySelector(".carouselSlide");
const carouselImages = document.querySelectorAll(".carouselSlide img");

// Buttons
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

// Counter
let counter = 1;
let size = carouselImages[0].width;

// offset position by 1 image
carouselSlide.style.transform = `translateX(${-size * counter}px)`

// fix position when resizing
window.addEventListener("resize", function() {
    size = carouselImages[0].width;
    carouselSlide.style.transition = "none";
    carouselSlide.style.transform = `translateX(${-size * counter}px)`
    console.log("1")
});

//Slide functions
nextButton.addEventListener("click", function() {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter - 1}px)`
})

prevButton.addEventListener("click", function() {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter - 1}px)`
})

//Reset Slide Position
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