export class CreditsButton {
    constructor(scene) {
        this.relatedScene = scene;
    }

    preload() {
        this.relatedScene.load.spritesheet('buttonC', 'assets/images/credentials.png', { frameWidth: 190, frameHeight: 49 });
    }

    create() {
        this.creditsButton = this.relatedScene.add.sprite(400, 300, 'buttonC').setInteractive();

        this.creditsButton.on('pointerover', () => {
            this.creditsButton.setFrame(1);
        });
        this.creditsButton.on('pointerout', () => {
            this.creditsButton.setFrame(0);
        });
        this.creditsButton.on('pointerdown', () => {
            this.relatedScene.scene.switch('credits');
        });
    }
} 