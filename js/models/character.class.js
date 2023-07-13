class Character extends MovableObject {
    height = 250;
    y = 175;
    speed = 10;

    offset =  {
        top: 100,
        left: 10,
        right: 10, 
        bottom: 10
    }

    imagesIdle = [
        '../../img/2_character_pepe/1_idle/idle/I-1.png',
        '../../img/2_character_pepe/1_idle/idle/I-2.png',
        '../../img/2_character_pepe/1_idle/idle/I-3.png',
        '../../img/2_character_pepe/1_idle/idle/I-4.png',
        '../../img/2_character_pepe/1_idle/idle/I-5.png',
        '../../img/2_character_pepe/1_idle/idle/I-6.png',
        '../../img/2_character_pepe/1_idle/idle/I-7.png',
        '../../img/2_character_pepe/1_idle/idle/I-8.png',
        '../../img/2_character_pepe/1_idle/idle/I-9.png',
        '../../img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    imagesLongIdle = [
        '../../img/2_character_pepe/1_idle/long_idle/I-11.png',
        '../../img/2_character_pepe/1_idle/long_idle/I-12.png',
        '../../img/2_character_pepe/1_idle/long_idle/I-13.png',
        '../../img/2_character_pepe/1_idle/long_idle/I-14.png',
        '../../img/2_character_pepe/1_idle/long_idle/I-15.png',
        '../../img/2_character_pepe/1_idle/long_idle/I-16.png',
        '../../img/2_character_pepe/1_idle/long_idle/I-17.png',
        '../../img/2_character_pepe/1_idle/long_idle/I-18.png',
        '../../img/2_character_pepe/1_idle/long_idle/I-19.png',
        '../../img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];

    imagesWalking = [
        '../../img/2_character_pepe/2_walk/W-21.png',
        '../../img/2_character_pepe/2_walk/W-22.png',
        '../../img/2_character_pepe/2_walk/W-23.png',
        '../../img/2_character_pepe/2_walk/W-24.png',
        '../../img/2_character_pepe/2_walk/W-25.png',
        '../../img/2_character_pepe/2_walk/W-26.png'
    ];

    imagesJumping = [
        '../../img/2_character_pepe/3_jump/J-31.png',
        '../../img/2_character_pepe/3_jump/J-32.png',
        '../../img/2_character_pepe/3_jump/J-33.png',
        '../../img/2_character_pepe/3_jump/J-34.png',
        '../../img/2_character_pepe/3_jump/J-35.png',
        '../../img/2_character_pepe/3_jump/J-36.png',
        '../../img/2_character_pepe/3_jump/J-37.png',
        '../../img/2_character_pepe/3_jump/J-38.png',
        '../../img/2_character_pepe/3_jump/J-39.png'
    ];

    imagesHurt = [
        '../../img/2_character_pepe/4_hurt/H-41.png',
        '../../img/2_character_pepe/4_hurt/H-42.png',
        '../../img/2_character_pepe/4_hurt/H-43.png'
    ];

    imagesDead = [
        '../../img/2_character_pepe/5_dead/D-51.png',
        '../../img/2_character_pepe/5_dead/D-52.png',
        '../../img/2_character_pepe/5_dead/D-53.png',
        '../../img/2_character_pepe/5_dead/D-54.png',
        '../../img/2_character_pepe/5_dead/D-55.png',
        '../../img/2_character_pepe/5_dead/D-56.png',
        '../../img/2_character_pepe/5_dead/D-57.png'
    ];

    world;
    walkingSound = new Audio('../audio/walkingCharacter.mp3');

    constructor() {
        super().loadImage('../../img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
        this.applyGravity();
        this.animate();    
    }

    animate() {
        setInterval(() => {
            this.walkingSound.pause();
            if(this.world.keyboard.right && this.x < this.world.level.levelEndX) {
                this.moveRight();
                this.otherDirection = false;
                if(!this.isAboveGround()){
                    this.walkingSound.play();
                }
            }

            if(this.world.keyboard.left && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                if(!this.isAboveGround()){
                    this.walkingSound.play();
                }
            }

            if(this.world.keyboard.up && !this.isAboveGround()) {
                this.jump();
            }

            this.world.cameraX = -this.x + 100;

        }, 1000 / 60)

        setInterval(() => {
            if(this.isDead()) {
                window.removeEventListener('keydown', event);
                this.playAnimation(this.imagesDead);
                //document.getElementById('gameSoundtrack').muted = true; // => prüfen mit mute Funktion
                // mute walking sound / jump sound etc.
                // Play death sound
                // this.intervalIds.forEach(clearInterval); // => Stop Game
                this.clearAllIntervals();
                setTimeout(() => {
                    document.getElementById('gameOverScreen').style.display = "flex";
                }, 1000);

            } else if(this.isHurt()) {
                this.playAnimation(this.imagesHurt);
            } else if(this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            } else {
                if(this.world.keyboard.right || this.world.keyboard.left) {
                    this.playAnimation(this.imagesWalking);
                }
            }
        }, 50)
    }

    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    };
}

