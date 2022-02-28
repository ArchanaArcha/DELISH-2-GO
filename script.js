function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        hours=parseInt(timer/60,10);
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours: hours;  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent =hours+":"+ minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var twohours =5*60*60,
        display = document.querySelector('#time');
    startTimer(twohours, display);
};