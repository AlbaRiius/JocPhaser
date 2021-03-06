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
    platforms.setCollisionByExclusion(-1, true);
    this.spikes = map.createFromObjects('Spikes', 71, { key: 'spike' }, this);
    this.spikes.forEach(element => {
      element.y += 45;
    });

    //Jugador
    this.player = this.physics.add.sprite(50, 320, 'player');
    this.player.setBounce(0.1);
    this.player.setCollideWorldBounds(true);
    this.physics.add.collider(this.player, platforms);


    //Caminar
    this.anims.create({
      key: 'walk',
      frames: this.anims.generateFrameNames('player', { start: 2, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'idle',
      frames: [{ key: 'player', frame: 'robo_player_0' }],
      frameRate: 10,
    });

    this.anims.create({
      key: 'jump',
      frames: [{ key: 'player', frame: 'robo_player_1' }],
      frameRate: 20,
    });

    this.cursors = this.input.keyboard.createCursorKeys();

    this.scoreText = this.add.text(16, 16, 'POINTS: 0', { fontSize: '20px', fill: '#fff', fontFamily: 'verdana, arial, sans-serif' });


    //Spikes
    this.spikes = this.physics.add.group({
      allowGravity: false,
      immovable: true
    });
    map.getObjectLayer('Spikes').objects.forEach((spike) => {
      const spikeSprite = this.spikes.create(spike.x, spike.y + 45 - spike.height, 'spike').setOrigin(0);
      spikeSprite.body.setSize(spike.width, spike.height - 20).setOffset(0, 20);
    });

    this.physics.add.collider(this.player, this.spikes, this.playerHit(this.player), null, this);


  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-200);
      if (this.player.body.onFloor()) {
        this.player.play('walk', true);
      }
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(200);
      if (this.player.body.onFloor()) {
        this.player.play('walk', true);
      }
    } else {
      this.player.setVelocityX(0);
      if (this.player.body.onFloor()) {
        this.player.play('idle', true);
      }
    }

    if (this.cursors.up.isDown && this.player.body.onFloor()) {
      console.log("Salto");
      this.player.setVelocityY(-330);
      this.player.play('jump', true);
    }

    // Faig que mire cap al costat cap on camina
    if (this.player.body.velocity.x > 0) {
      this.player.setFlipX(false);
    } else if (this.player.body.velocity.x < 0) {
      this.player.setFlipX(true);
    }
  }

  playerHit(player) {
    player.setVelocity(0, 0);
    player.setX(50);
    player.setY(320);
    player.play('idle', true);
    player.setAlpha(0);
    let tw = this.tweens.add({
      targets: player,
      alpha: 1,
      duration: 100,
      ease: 'Linear',
      repeat: 5,
    });
  }

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