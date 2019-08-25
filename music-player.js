class MusicPlayerConstructor {

    play(url = 'FreesoundOrgSynthesizedHornByDarkadders.mp3') {
        console.log('AAAAAAAAAAAAAAAAAAa')
        const audio = new Audio(url);
        audio.play();
    }

    static create() {
        if (!MusicPlayerConstructor.instance) {
            MusicPlayerConstructor.instance = new MusicPlayerConstructor();
        }
        return MusicPlayerConstructor.instance;
    }
}


MusicPlayerConstructor.instance = null;
