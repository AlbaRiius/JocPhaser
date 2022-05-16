import { Initial } from './scenes/initial.js';
import { Game } from './scenes/game.js';
import { Credits } from './scenes/credits.js';
import { Congratulations } from './scenes/congratulations.js';
import { Gameover } from './scenes/gameover.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scene: [Initial, Game, Credits, Gameover, Congratulations],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
}

var game = new Phaser.Game(config);