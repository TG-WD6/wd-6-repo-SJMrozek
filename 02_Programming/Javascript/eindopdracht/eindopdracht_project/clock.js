const hrHand = document.getElementById("hrHand");
const minHand = document.getElementById("minHand");
const secHand = document.getElementById("secHand");
const display = document.getElementById("display");

function runClock() {
    setTimeout(runClock, 1000)

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    hrHand.style.transform = `rotate(${360 / 12 * h + 360 / 12 / 60 * m}deg)`;
    minHand.style.transform = `rotate(${360 / 60 * m + 360 / 60 /60 * s}deg)`;
    secHand.style.transform = `rotate(${360 / 60 * s}deg)`;

    
    // blink every hour
    if (m == 0 && s < h) {
        blink();
    }
    
    function blink() {
        display.innerText = h;
            display.classList.add("blink")
            setTimeout(() => {
                display.innerText = null;
                display.classList.remove("blink")
            }, 500);
    }
}