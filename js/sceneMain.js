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
       
        var frameNames= this.anims.generateFrameNumbers('boy');

       this.anims.create({
            key: 'walk',
            frames: frameNames,
            frameRate: 10,
            repeat: -1
        });
       this.char.play('walk');

       this.text1=this.add.text(200,300,"HELLO!", {fontFamily:'Anton', color:'#ff0000', fontSize:'40px'});


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
        this.char.x+=2;
        if (this.char.x>game.config.width)
        {
            this.char.x=0;
        }
    }

}