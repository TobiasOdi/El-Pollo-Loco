class ThrowableObject extends MovableObject {
    speedY = 30;
    speedX = 30;
    level = level1;
    otherDirection;
    bottleBurst = new Audio('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/audio/bottleBurst1.mp3');
    intervalIds = [];
    checkForHitInterval;
    throwInterval;

    imagesRotate = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    imagesImpact = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    offset =  {
        top: 10,
        left: 20,
        right: 20, 
        bottom: 10
    };

    /**
     * This function loads the images for the throwable bottle, sets its size and other variables and runs all the necessary functions.
     * @param {*} x 
     * @param {*} y 
     * @param {*} direction 
     */
    constructor(x, y, direction) {
        super().loadImage('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.imagesRotate);
        this.loadImages(this.imagesImpact);
        this.x = x;
        this.y = y;
        this.otherDirection = direction;
        this.height = 80;
        this.width = 60;
        this.bottleHit = false;
        this.speedY = 28;
        this.acceleration = 3;
        this.animate();
        this.stopInterval();
    }

    /**
     * This function plays the animations depending on different values und assigns an interval to a variable.
     */
    animate() {
        this.bottleBurst.pause();
        this.throw();

        this.checkForHitInterval =
        setInterval(() => {
            if(this.bottleHit == true || this.y > 345) {
                if(this.audioVolume == true) {
                    this.bottleBurst.play();
                }
                this.playAnimation(this.imagesImpact);
                this.bottleBurst = false;
                this.speedY = 0;
                this.acceleration = 0;
                setTimeout(() => {
                    this.x = 0;
                    this.y = -100;
                }, 150);
            } else {
                this.playAnimation(this.imagesRotate);
            }
        }, 80);
    }

  
    /**
     * This function sets the gravity for the throwable bottle and assigns an interval to a variable.
     */
    throw() {
        this.applyGravity();

        this.throwInterval = 
        setInterval(() => {
            this.throwAcceleration();
        }, 40);
    }   

    /**
     * This function controlls the speed of the thrown bottle.
     */
    throwAcceleration() {
            if(this.otherDirection == true) {
                this.x -= 12;
            } else {
                this.x += 12;
            }
    }

    /**
     * This function stops the "checkForHitInterval" when the bottle hits an enemy or the ground.
     */
    stopInterval() {
        setInterval(() => {
            if(this.bottleHit == true || this.y > 345) {
                clearInterval(this.checkForHitInterval)
                clearInterval(this.throwInterval);
            };
        }, 80)
    }
    
}
