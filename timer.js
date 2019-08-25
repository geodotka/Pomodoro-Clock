const MINIMUM_CLOCK_VALUE = 0;
const MAXIMUM_CLOCK_VALUE = 60;


class Timer {
    decreaseElementNumber($element) {
        let number = Number($element.textContent);
        if (Number.isNaN(number)) {
            throw new TypeError('element content is not a number');
        }
        if (number <= MINIMUM_CLOCK_VALUE) {
            number = MINIMUM_CLOCK_VALUE;
        } else {
            number--;
        }
        $element.textContent = String(number);
    }

    increaseElementNumber($element) {
        let number = Number($element.textContent);
        if (Number.isNaN(number)) {
            throw new TypeError('element content is not a number');
        }
        if (number < MAXIMUM_CLOCK_VALUE) {
            number++;
        } else {
            number = MAXIMUM_CLOCK_VALUE;
        }
        $element.textContent = String(number);
    }

    timeCounter(arg1, arg2) {
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

    startTimer($breakTime, $sessionTime) {
        const breakTime = Number($breakTime.textContent);
        const sessionTime = Number($sessionTime.textContent);

        const userBreakTime = breakTime * Timer.ONE_MINUTE_IN_MILLISECONDS;
        const userSessionTime = sessionTime * Timer.ONE_MINUTE_IN_MILLISECONDS;

        this.timeCounter(userSessionTime, userBreakTime);
    }

}

Timer.ONE_MINUTE_IN_MILLISECONDS = 60000;


if (typeof module === 'object' && module.exports) {
    module.exports = Timer;
}
