import { Initial } from './scenes/initial.js';
import { Level1 } from './scenes/level1.js';
import { Credits } from './scenes/credits.js';
import { Congratulations } from './scenes/congratulations.js';
import { Gameover } from './scenes/gameover.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scene: [Initial, Level1, Credits, Gameover, Congratulations],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
}

var game = new Phaser.Game(config);