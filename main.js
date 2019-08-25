function main() {
    const timer = new Timer();

    function setupSessionButtons() {

        const $sessionMinus = document.querySelector('#sessionMinus');
        $sessionMinus.addEventListener('click', () => {
            const $item = document.querySelector('#sessionTime');
            timer.decreaseElementNumber($item);
        });

        const $breakMinus = document.querySelector('#breakMinus');
        $breakMinus.addEventListener('click', () => {
            const $item = document.querySelector('#breakTime');
            timer.decreaseElementNumber($item);
        });
    }

    function setupBreakButtons() {

        const $sessionPlus = document.querySelector('#sessionPlus');
        $sessionPlus.addEventListener('click', () => {
            const $item = document.querySelector('#sessionTime');
            timer.increaseElementNumber($item);
        });

        const $breakPlus = document.querySelector('#breakPlus');
        $breakPlus.addEventListener('click', () => {
            const $item = document.querySelector('#breakTime');
            timer.increaseElementNumber($item);
        });
    }

    function setupClockButton() {
        const $clock = document.querySelector('#wholeClock');
        $clock.addEventListener('click', () => {
            const $breakTime = document.getElementById('breakTime');
            const $sessionTime = document.getElementById('sessionTime');

            const $ele = document.getElementById('ele');
            $ele.textContent = 'session';

            timer.startTimer($breakTime, $sessionTime);
        });
    }

    setupSessionButtons();
    setupBreakButtons();
    setupClockButton();
}


main();
