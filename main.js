function main() {
    Clock.create();

    const $clock = document.querySelector('#wholeClock');
    $clock.addEventListener('ticktock', () => {
        const player = MusicPlayerConstructor.create();
        player.play();
    });
}


main();
