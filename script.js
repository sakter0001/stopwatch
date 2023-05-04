let seconds = 00;
let tens = 00;
let mins = 00;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;
let audioStart = new Audio('s.mp3');
let audioPause = new Audio('p.mp3');
let audioReset = new Audio('sound.mp3');

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
    audioStart.play();
})

btnStop.addEventListener('click', () => {
    clearInterval(interval);
    audioPause.play();
})

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    audioReset.play();
    tens = 0;
    seconds = 0;
    mins = 0;
    getSeconds.innerHTML = '00';
    getTens.innerHTML = '00';
    getMins.innerHTML = '00';
})

function startTimer() {
    tens++;
    if (tens < 10) {
        getTens.innerHTML = '0' + tens;
    } else if (tens >= 10 && tens < 100) {
        getTens.innerHTML = tens;
    } else {
        tens = 0;
        seconds++;
        if (seconds < 10) {
            getSeconds.innerHTML = '0' + seconds;
        } else if (seconds >= 10 && seconds < 60) {
            getSeconds.innerHTML = seconds;
        } else {
            seconds = 0;
            mins++;
            if (mins < 10) {
                getMins.innerHTML = '0' + mins;
            } else {
                getMins.innerHTML = mins;
            }
        }
    }
}











