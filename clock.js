class Clock {

    constructor() {
        this.timer = new Timer();

        this.setupSessionButtons();
        this.setupBreakButtons();
        this.setupClockButton();
    }

    setupSessionButtons() {

        const $sessionMinus = document.querySelector('#sessionMinus');
        $sessionMinus.addEventListener('click', () => {
            const $item = document.querySelector('#sessionTime');
            this.timer.decreaseElementNumber($item);
        });

        const $breakMinus = document.querySelector('#breakMinus');
        $breakMinus.addEventListener('click', () => {
            const $item = document.querySelector('#breakTime');
            this.timer.decreaseElementNumber($item);
        });
    }

    setupBreakButtons() {

        const $sessionPlus = document.querySelector('#sessionPlus');
        $sessionPlus.addEventListener('click', () => {
            const $item = document.querySelector('#sessionTime');
            this.timer.increaseElementNumber($item);
        });

        const $breakPlus = document.querySelector('#breakPlus');
        $breakPlus.addEventListener('click', () => {
            const $item = document.querySelector('#breakTime');
            this.timer.increaseElementNumber($item);
        });
    }

    setupClockButton() {
        const $clock = document.querySelector('#wholeClock');
        $clock.addEventListener('click', () => {
            const $breakTime = document.getElementById('breakTime');
            const $sessionTime = document.getElementById('sessionTime');

            const $ele = document.getElementById('ele');
            $ele.textContent = 'session';

            this.timer.startTimer($breakTime, $sessionTime);
        });
    }

    // factory method
    static create() {
        return new Clock();
    }

}

if (typeof module === 'object' && module.exports) {
    module.exports = Clock;
}
