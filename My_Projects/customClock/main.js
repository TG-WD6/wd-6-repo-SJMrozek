const title = document.getElementById("title");
const body = document.getElementById("body");



const toggler = document.getElementById("toggler");
const speed = document.getElementById("speedSlider");
let spdDisplay = document.getElementById("speedDisplay");

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const satellitePrimaryColor = document.getElementById("secArrow");
const satelliteSecondaryColor = document.getElementById("secArrow");
body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
body.style.backgroundColor = `rgb(${0}, ${0}, ${0}, 0)`;

{   // settings
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

        //type yes to change secondary color, otherwise set to primary
    let text = document.getElementById("text").value
    function updateText() {
        text = document.getElementById("text").value
    }

    function setColor(red, green, blue) {
        // body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        
        text = document.getElementById("text").value
        
            // switch statement for choosing color to change
        switch (text) {
            case "yes":
                satelliteSecondaryColor.style.setProperty('--secondary-color',`rgb(${red}, ${green}, ${blue})`)
                break;
            default:
                satellitePrimaryColor.style.setProperty('--primary-color',`rgb(${red}, ${green}, ${blue})`);
        }
    }

    // function setTitle(red, green, blue) {
    //     title.innerText = "rgb(" + red + ", " + green + ", " + blue + ")";
    // }

    function updateColor() {
        setColor(red.value, green.value, blue.value,0.5);
        // setTitle(red.value, green.value, blue.value);
    }
}

{   // clock    copied from W3Schools
    const clock = document.getElementById("digitalClock");
    const secArrow = document.getElementById("secArrow");
    const minArrow = document.getElementById("minArrow");
    const hrArrow = document.getElementById("hrArrow");
    

    let tic1 = new Audio("./audio/ticking/clock01-1.mp3");
    tic1.volume = 1;
    let tic2 = new Audio("./audio/ticking/clock01-2.mp3");
    tic2.volume = 1;
    let alarmSound = new Audio("./audio/beep.mp3")
    alarmSound.volume = 0.3;

    function alarm() {
        alarmSound.pause();
        alarmSound.load();
        alarmSound.play();
    }

    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    function startClock() {
        hrArrow.style.transform = `rotate(${(360 / 12 * h)}deg)`;
        minArrow.style.transform = `rotate(${(360 / 60 * m)}deg)`;
        secArrow.style.transform = `rotate(${(360 / 60 * s)}deg)`;
        // secArrowBefore.style.transform = `rotate(${(360 / 60 * s)}deg)`;
        setTimeout(startTime,1)
    }

    // function resetArrow() {
    //     function startCycle() {
    //     secArrow.style.transition = "transform 1s linear";
    //     secArrow.style.transform = "rotate(6.001deg)"
    //     }
    //     secArrow.style.transition = "transform 0s none";
    //     secArrow.style.transform = "rotate(0deg)"
    //     setTimeout(startCycle, 1000);
    // }

    function startTime() {
        today = new Date();
        h = today.getHours();
        let hx = h  // hours used for calculating beeps (maybe does not work at 00:00:00)
        m = today.getMinutes();
        s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        

        if (h > 12) {hx = today.getHours() - 12}        

        clock.innerText =  h + ":" + m + ":" + s;
        title.innerText = (h + " : " + m)
        
        
        // switch (secArrow.style.transform) {
        //     case `rotate(${360 / 60}deg)`:
        //         resetArrow()
        //         break;
        //     default:
        //         secArrow.style.transition = "transform 1s linear";
        //         secArrow.style.transform = `rotate(${(360 / 60 * s + (360 / 60))}deg)`; // + (360 / 60) aligns arrow with time
        // }

        minArrow.style.transition = "transform 60s linear";
        hrArrow.style.transition = "transform 3600s linear";

        hrArrow.style.transform = `rotate(${(360 / 12 * h + (360 / 12))}deg)`; // + (360 / 12) aligns arrow with time
        minArrow.style.transform = `rotate(${(360 / 60 * m + (360 / 60))}deg)`; // + (360 / 60) aligns arrow with time
        // secArrow.style.transform = `rotate(${(360 / 60 * s + (360 / 60))}deg)`; // + (360 / 60) aligns arrow with time

        console.log(secArrow.style.transform);

        setTimeout(startTime, 1000);


        
        // reset arrow position
        if (secArrow.style.transform == "rotate(6deg)") {
            function startCycle() {
                secArrow.style.transition = "transform 1s linear";
                secArrow.style.transform = "rotate(6.01deg)"
                setTimeout(1000)
                }

                secArrow.style.transition = "none";
                secArrow.style.transform = "rotate(0deg)"
                setTimeout(startCycle, 5);
        } else {
            secArrow.style.transition = "transform 1s linear";
            secArrow.style.transform = `rotate(${(360 / 60 * s + (360 / 60))}deg)`; // + (360 / 60) aligns arrow with time
        }
        
        
        if (s % 2 === 1) {
            tic1.load();
            tic1.play();
        } else {
            tic2.load();
            tic2.play();
        }

        if (m == 0 && s < hx) {
                alarm()
                setTimeout(alarm, 225)
        } else if (m == 30 && s == 0) {
            alarm()
        }

        if(h == 10 && m == 15) {
            
        }
    }
    
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

    
}