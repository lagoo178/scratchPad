class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	//load our images or sounds 
        this.load.image("face", "images/face.png");
    }
    create() {
       //define our objects
       this.face = this.add.image(0, 0, "face");
       this.face.setOrigin(0.5,0.5);
       this.face.x = game.config.width/2;
       this.face.y = game.config.height/2;
       //this.face.alpha = 0.5;
       //this.face.scaleX = 0.5;
       //this.face.scaleY = 0.5;
       //this.face.displayWidth = 100;
       //this.face.displayHeight = 50;
    }
    update() {
        //constant running loop
    }

}