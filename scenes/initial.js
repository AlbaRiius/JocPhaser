import { CreditsButton } from "../components/credits-button.js";
import { StartButton } from "../components/start-button.js";
export class Initial extends Phaser.Scene {

    constructor() {
        super({ key: 'initial' });
        this.startButton = new StartButton(this);
        this.creditsButton= new CreditsButton(this);
    }

    preload() {
        this.load.image('background', 'images/background.png');
        this.load.image('initial', 'images/gamestart.png');
        this.startButton.preload();
        this.creditsButton.preload();
    }

    create() {
        this.add.image(410, 250, 'background');
        this.startButton.create();
        this.creditsButton.create();
        this.gameoverImage = this.add.image(400, 90, 'initial');
    }
}