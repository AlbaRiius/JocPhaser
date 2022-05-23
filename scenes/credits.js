export class Credits extends Phaser.Scene {
  constructor() {
    super({ key: 'credits' });
  }

  preload() {
    this.load.image('background', 'assets/images/background.png');
    this.load.image('congratulations', 'assets/images/congratulations.png');
  }

  create() {
    this.add.image(410, 250, 'background');
    this.creditsText = this.add.text(320, 230, 'CREDITS', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(250, 400, 'Created By: Alba:)', { fontSize: '26px', fill: '#fff' });

  }
}