import TitleScene from 'titleScene';
import GameScene from 'gameScene';

// Our game scene
var gameScene = new GameScene();
var titleScene = new TitleScene();


//* Game scene */
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
};
var game = new Phaser.Game(config);

// load scenes
game.scene.add('titleScene', titleScene);
game.scene.add("game", gameScene);

// start title
game.scene.start('titleScene');