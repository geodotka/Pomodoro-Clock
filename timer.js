const MINIMUM_CLOCK_VALUE = 0;
const MAXIMUM_CLOCK_VALUE = 60;


class Timer {

    constructor() {
        this.interval = null;

        this.setupResetButton();
    }
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

    _startCounter(timeToCount, timeToCountInNextRound) {
        let sessionTime = timeToCount;
        const $clock = document.querySelector('#wholeClock');

        this.interval = setInterval(() => {
            sessionTime -= Timer.ONE_SECOND;

            const date = new Date(sessionTime);

            this.updateTimerControl(date);

            if (sessionTime === MINIMUM_CLOCK_VALUE) {
                // document.dispatchEvent(new Event('ticktock')); or;
                $clock.dispatchEvent(new Event('ticktock'));
                this.toggleCountLabel();
                clearInterval(this.interval);
                this._startCounter(timeToCountInNextRound, timeToCount);
            }
        }, Timer.ONE_SECOND);
    }

    setupResetButton() {
        const $resetButton = document.getElementById('resetBttn');
        $resetButton.addEventListener('click', () => {
            this.resetTimer();
        });
    }

    resetTimer() {
        window.clearInterval(this.interval);
        document.getElementById('ele').textContent = 'click';
        document.getElementById('timer').textContent = 'to start';
    }

    startTimer($breakTime, $sessionTime) {
        const breakTime = Number($breakTime.textContent);
        const sessionTime = Number($sessionTime.textContent);

        const userBreakTime = breakTime * Timer.ONE_MINUTE_IN_MILLISECONDS;
        const userSessionTime = sessionTime * Timer.ONE_MINUTE_IN_MILLISECONDS;

        this._startCounter(userSessionTime, userBreakTime);
    }

    updateTimerControl(date) {
        const $timer = document.querySelector('#timer');
        $timer.textContent = this.formatTime(date);
    }

    toggleCountLabel() {
        const $item = document.querySelector('#ele');
        $item.textContent = (whatIsCounted.textContent === 'session') ? 'break' : 'session';
    }

    formatTime(date) {
        const minutes = String(date.getMinutes());
        const seconds = String(date.getSeconds());
        const TWO_DIGITS = 2;
        const PREFIX = 0;
        const minutesWithZero = minutes.padStart(TWO_DIGITS, PREFIX);
        const secondsWithZero = seconds.padStart(TWO_DIGITS, PREFIX);

        return `${minutesWithZero}:${secondsWithZero}`;
    }

}

Timer.ONE_MINUTE_IN_MILLISECONDS = 60000;
Timer.ONE_SECOND = 1000;


if (typeof module === 'object' && module.exports) {
    module.exports = Timer;
}
