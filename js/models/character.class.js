class Character extends MovableObject {
    height = 250;
    y = 175;
    speed = 20;
    world;
    walkingSound = new Audio('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/audio/walkingCharacter.mp3');
    hurtSound = new Audio('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/audio/hurt1.mp3');
    deathSound = new Audio('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/audio/characterDead.mp3');
    movementAnimate;
    idleActions;
    movemetActions;

    offset =  {
        top: 100,
        left: 20,
        right: 20, 
        bottom: 10
    };

    imagesIdle = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/idle/I-1.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/idle/I-2.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/idle/I-3.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/idle/I-4.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/idle/I-5.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/idle/I-6.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/idle/I-7.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/idle/I-8.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/idle/I-9.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    imagesLongIdle = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/long_idle/I-11.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/long_idle/I-12.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/long_idle/I-13.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/long_idle/I-14.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/long_idle/I-15.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/long_idle/I-16.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/long_idle/I-17.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/long_idle/I-18.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/long_idle/I-19.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    imagesWalking = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/2_walk/W-21.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/2_walk/W-22.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/2_walk/W-23.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/2_walk/W-24.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/2_walk/W-25.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/2_walk/W-26.png'
    ];

    imagesJumping = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/3_jump/J-31.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/3_jump/J-32.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/3_jump/J-33.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/3_jump/J-34.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/3_jump/J-35.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/3_jump/J-36.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/3_jump/J-37.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/3_jump/J-38.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/3_jump/J-39.png'
    ];

    imagesHurt = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/4_hurt/H-41.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/4_hurt/H-42.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/4_hurt/H-43.png'
    ];

    imagesDead = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/5_dead/D-51.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/5_dead/D-52.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/5_dead/D-53.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/5_dead/D-54.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/5_dead/D-55.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/5_dead/D-56.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/5_dead/D-57.png'
    ];

    /**
     * This function loads the characters images for the animations.
     */
    constructor() {
        super().loadImage('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.imagesIdle);
        this.loadImages(this.imagesLongIdle);
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesJumping);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
        this.applyGravity();
        this.animate();   
        this.stopInterval(); 
    }

    /**
     * This function plays the animations depending on different values/booleans and assigns intervals to variables.
     */
    animate() {
        this.movemetActions = setInterval(() => {this.movement()}, 40);
        this.idleActions = setInterval(() => {this.checkForAction()}, 1000);
        
        this.movementAnimate =
        setInterval(() => {
            this.walkingSound.pause();
            if(this.isDead()) {
                this.characterDeadActions();
            } else if(this.isHurt()) {
                this.characterHurtActions();
            } else if(this.isAboveGround()) {
                this.playAnimation(this.imagesJumping);
            } else {
                if(this.world.keyboard.right || this.world.keyboard.left) {
                    this.playAnimation(this.imagesWalking);}
            }
        }, 80);
    }

    /**
     * This function plays the dead sound and animation.
     */
    characterDeadActions() {
        if(this.world.audioVolume == true){
            this.deathSound.play();
        }
        this.playAnimation(this.imagesDead);
        stopGame();
        setTimeout(() => {
            this.walkingSound.pause();
            document.getElementById('gameOverScreen').style.display = "flex";
        }, 1000);
    }

    /**
     * This function plays the hurt sound and animation.
     */
    characterHurtActions() {
        if(this.world.audioVolume == true){
            this.hurtSound.play();
        }
        this.playAnimation(this.imagesHurt);
    }

     /**
     * This function stopps the "movementAnimate" interval when the character is dead.
     */
    stopInterval() {
        setInterval(() => {
            if(this.isDead()) {
                clearInterval(this.movementAnimate, this.idleActions, this.idleActions);
            }
        }, 80);
    }

    /**
     * This function lets the character move, depending on the pressed keys.
     */
    movement() {
        if(this.world.keyboard.right && this.x < this.world.level.levelEndX) {
            this.characterMoveRight();
        }
        if(this.world.keyboard.left && this.x > 0) {
            this.characterMoveLeft();
        }
        if(this.world.keyboard.up && !this.isAboveGround()) {
            this.jump();
        }
        this.world.cameraX = -this.x + 100;
    }

    characterMoveRight() {
        this.moveRight();
        this.otherDirection = false;
        if(!this.isAboveGround() && this.audioVolume == true){
            this.walkingSound.play();
        }
    }

    characterMoveLeft() {
        this.moveLeft();
        this.otherDirection = true;
        if(!this.isAboveGround() && this.audioVolume == true){
            this.walkingSound.play();
        }
    }


    /**
     * This function checks if the character is idle or long idle and runs the animations depending on the time passed.
     */
    checkForAction() {
        let currentTime = new Date().getTime();
        if((currentTime - this.world.keyboard.lastKeyPress) > 100 && (currentTime - this.world.keyboard.lastKeyPress) < 3000) {
            this.playAnimation(this.imagesIdle);
        } else if((currentTime - this.world.keyboard.lastKeyPress) > 3000) {
            this.playAnimation(this.imagesLongIdle);
        }
    };
}