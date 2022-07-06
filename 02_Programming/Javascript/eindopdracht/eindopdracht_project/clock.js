const display = document.getElementById("centerPiece");
const hrArrow = document.getElementById("hrArrow");
const minArrow = document.getElementById("minArrow");
const secArrow = document.getElementById("secArrow");

function runClock() {
    setTimeout(runClock, 1000)

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    hrArrow.style.transform = `rotate(${360 / 12 * h + 360 / 12 / 60 * m}deg)`;
    minArrow.style.transform = `rotate(${360 / 60 * m + 360 / 60 /60 * s}deg)`;
    secArrow.style.transform = `rotate(${360 / 60 * s}deg)`;

    
    // blink every hour
    if (m == 15 && s < h) {
        blink();
    }
    
    function blink() {
        display.innerText = h;
            display.classList.add("light")
            setTimeout(() => {
                display.innerText = null;
                display.classList.remove("light")
            }, 500);
    }
}