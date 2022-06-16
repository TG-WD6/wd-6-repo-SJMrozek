const title = document.getElementById("title");
const body = document.getElementById("body");

const toggler = document.getElementById("toggler");
const speed = document.getElementById("speed");
let spdDisplay = document.getElementById("speedDisplay");

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");



let isActive = false
function toggleRotation() {
    if (isActive === false) {
        isActive = true;
        body.style.animationName = "rotateHue";
        toggler.innerText = "Stop Hue Rotation";
    } else {
        isActive = false
        body.style.animation = null;
        toggler.innerText = "Start Hue Rotation";
    }
    return isActive
}

spdDisplay.innerText = speed.value + "s";
body.style.animationDuration = speed.value + "s";

function updateSpeed() {
    spdDisplay.innerText = speed.value + "s";
    body.style.animationDuration = speed.value + "s";
}


function setColor(red, green, blue) {
    body.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function setTitle(red, green, blue) {
    title.innerText = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function updateColor() {
    setColor(red.value, green.value, blue.value);
    setTitle(red.value, green.value, blue.value);
}

