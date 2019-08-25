const MINIMUM_CLOCK_VALUE = 0;
const MAXIMUM_CLOCK_VALUE = 60;

function decreaseElementNumber($element) {
    let currentTime = Number($element.textContent);
    if (currentTime <= MINIMUM_CLOCK_VALUE) {
        currentTime = MINIMUM_CLOCK_VALUE;
    } else {
        currentTime--;
    }
    $element.textContent = String(currentTime);
}


function increaseElementNumber($element) {
    let currentTime = Number($element.textContent);
    if (currentTime < MAXIMUM_CLOCK_VALUE) {
        currentTime++;
    } else {
        currentTime = MAXIMUM_CLOCK_VALUE;
    }
    $element.textContent = String(currentTime);
}


function timeCounter(arg1, arg2) {
    const sessionTime = arg1;
    const breakTime = arg2;
    const interval = setInterval(function () {
        arg1 -= 1000;
        const getDate = new Date();
        getDate.setTime(arg1);
        const timer = document.getElementById('timer');
        timer.textContent = ('0' + getDate.getMinutes()).slice(-2) + ':' + ('0' + getDate.getSeconds()).slice(-2);

        if (arg1 === 0) {
            const snd = new Audio('FreesoundOrgSynthesizedHornByDarkadders.mp3');
            snd.play();
            const whatIsCounted = document.getElementById('ele');
            whatIsCounted.textContent = whatIsCounted.textContent == 'session' ? whatIsCounted.textContent = 'break' : whatIsCounted.textContent = 'session';
            clearInterval(interval);
            timeCounter(breakTime, sessionTime);
        }
    }, 1000);

    // ------ reset button
    const resetBttn = document.getElementById('resetBttn')
        .addEventListener('click', resetTimer);

    function resetTimer() {
        window.clearInterval(interval);
        document.getElementById('ele').textContent = 'click';
        document.getElementById('timer').textContent = 'to start';
    }
}


function timerOn() {
    const userBreakTime = Number(document.getElementById('breakTime').innerText) * 60000;
    const userSessionTime = Number(document.getElementById('sessionTime').innerText) * 60000;
    document.getElementById('ele').textContent = 'session';
    timeCounter(userSessionTime, userBreakTime);
}


if (typeof module === 'object' && module.exports) {
    module.exports = {
        decreaseElementNumber,
        increaseElementNumber,
        timeCounter,
        timerOn
    };
}
