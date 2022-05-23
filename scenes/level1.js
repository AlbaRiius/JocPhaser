export class Level1 extends Phaser.Scene {

  constructor() {
    super({ key: 'level1' });
  }

  init() {
    this.score = 0;
  }

  preload() {
    this.load.image('spike', 'assets/images/spike.png');
    this.load.image('tiles', 'assets/tilesets/mapa.png');
    this.load.tilemapTiledJSON('map1', 'assets/mapes/level1Bo.json');

    this.load.atlas('player', 'assets/images/kenney_player.png', 'assets/images/kenney_player_atlas.json');
  }

  create() {

    //Mapa
    const map = this.make.tilemap({ key: 'map1' });
    const tileset = map.addTilesetImage('tileset1', 'tiles');


    this.add.image(0, 0, 'background').setOrigin(0, 0).setScale(2, 0.8);
    const platforms = map.createStaticLayer('Platforms', tileset, 0, 50);
    this.spikes = map.createFromObjects('Spikes', 71, { key: 'spike' }, this);
    // Move spikes down 200 pixel to match their original positions on the platforms
    this.spikes.forEach(element => {
      element.y += 45;
    });

    //Jugador
    this.player = this.physics.add.sprite(50, 320, 'player');
    this.player.setBounce(0.1); // our player will bounce from items
    this.player.setCollideWorldBounds(true); // don't go out of the map
    this.physics.add.collider(platforms, this.player);

    this.scoreText = this.add.text(16, 16, 'POINTS: 0', { fontSize: '20px', fill: '#fff', fontFamily: 'verdana, arial, sans-serif' });
  }

  update() {
    // if (this.cursors.left.isDown) {
    //   this.platform.setVelocityX(-500);
    //   if (this.ball.getData('glue')) {
    //     this.ball.setVelocityX(-500);
    //   }
    // }
    // else if (this.cursors.right.isDown) {
    //   this.platform.setVelocityX(500);
    //   if (this.ball.getData('glue')) {
    //     this.ball.setVelocityX(500);
    //   }
    // }
    // else {
    //   this.platform.setVelocityX(0);
    //   if (this.ball.getData('glue')) {
    //     this.ball.setVelocityX(0);
    //   }
    // }

    // if (this.ball.y > 500 && this.ball.active) {
    //   console.log('fin', this.ball.y, this.ball, '--');
    //   this.endGame();
    // }

    // if (this.cursors.up.isDown) {
    //   if (this.ball.getData('glue')) {
    //     this.ball.setVelocity(-60, -300);
    //     this.ball.setData('glue', false);
    //   }
    // }
  }

  // platformImpact(ball, platform) {
  //   this.increasePoints(1);
  //   let relativeImpact = ball.x - platform.x;
  //   if (relativeImpact > 0) {
  //     console.log('derecha!');
  //     ball.setVelocityX(8 * relativeImpact);
  //   } else if (relativeImpact < 0) {
  //     console.log('izquierda!');
  //     ball.setVelocityX(8 * relativeImpact);
  //   } else {
  //     console.log('centro!!');
  //     ball.setVelocityX(Phaser.Math.Between(-10, 10))
  //   }
  // }

  // brickImpact(ball, brick) {
  //   brick.disableBody(true, true);
  //   this.increasePoints(10);
  //   if (this.bricks.countActive() === 0) {
  //     this.endGame(true);
  //   }
  // }

  // increasePoints(points) {
  //   this.score += points;
  //   this.scoreText.setText('PUNTOS: ' + this.score);
  // }

  // endGame(completed = false) {
  //   this.scene.pause();
  //   if (!completed) {
  //     this.scene.start('gameover');
  //   } else {
  //     this.scene.start('congratulations');
  //   }
  // }
}