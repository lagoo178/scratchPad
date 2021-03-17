class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	//load our images or sounds 
        //this.load.image("face", "images/face.png");
        
        this.load.spritesheet('boy', 'images/boy.png', { frameWidth: 120, frameHeight: 200 });
    }
    create() {
       //define our objects
       
       this.char = this.add.sprite(game.config.width/2,game.config.height/2,"boy");
       this.anims.create({
            key: 'walk',
            frames: [
                { key: 'boy',frame:0 },
                { key: 'boy',frame:1 },
                { key: 'boy',frame:2 },
                { key: 'boy',frame:3 },
                { key: 'boy',frame:4 },
                { key: 'boy',frame:5 },
            ],
            frameRate: 10,
            repeat: -1
        });
       this.char.play('walk');


       //this.face = this.add.image(0, 0, "face");
       //this.face.setOrigin(0.5,0.5);
       //this.face.x = game.config.width/2;
       //this.face.y = game.config.height/2;
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