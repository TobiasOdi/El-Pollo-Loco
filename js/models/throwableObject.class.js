class ThrowableObject extends MovableObject {
    speedY = 30;
    speedX = 30;
    level = level1;
    otherDirection;
    bottleBurst = new Audio('../audio/bottleBurst1.mp3');
    intervalIds = [];
    throwInterval;
    checkForHitInterval;

    imagesRotate = [
        '../../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../../img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../../img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../../img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ];

    imagesImpact = [
        '../../img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        '../../img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        '../../img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        '../../img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        '../../img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        '../../img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];

    /**
     * Loads, positions and animates the bottle that can be thrown
     * @param {*} x 
     * @param {*} y 
     * @param {*} direction 
     */
    constructor(x, y, direction) {
        super().loadImage('../../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.imagesRotate);
        this.loadImages(this.imagesImpact);
        this.x = x;
        this.y = y;
        this.otherDirection = direction;
        this.height = 80;
        this.width = 60;
        this.bottleHit = false;
        this.speedY = 27;
        this.acceleration = 2;
        this.animate();
        this.throw();
        this.stopInterval();
    }

    /**
     * Play animations depending on different action.
     */
    animate() {
        this.bottleBurst.pause();
        this.throw();

        this.checkForHitInterval =
        setInterval(() => {
            if(this.bottleHit == true || this.y > 345) {
                this.bottleBurst.play();
                this.playAnimation(this.imagesImpact);
                clearInterval(this.throwInterval);
                //this.intervalIds.forEach(id => {clearInterval(id)});
                this.bottleBurst = false;
                this.speedY = 0;
                this.acceleration = 0;
                setTimeout(() => {
                    this.x = 0;
                    this.y = -100;
                }, 100);
            } else {
                this.playAnimation(this.imagesRotate);
            }
        }, 80);
    }

    stopInterval() {
        setInterval(() => {
            if(this.bottleHit == true || this.y > 345) {
                clearInterval(this.checkForHitInterval)
            };
        }, 80)
    }
   
    /**
     * Runs the throw animation and apllies the gravity.
     */
    throw() {
        this.applyGravity();
        //this.setStoppableInterval(this.throwAcceleration, 40);
        this.throwInterval = setInterval(() => {
            this.throwAcceleration();
        }, 40);
        //this.throwAcceleration();
    }   
    // World braucht ein Array für throwableObjects

    throwAcceleration() {
            if(this.otherDirection == true) {
                this.x -= 8;
            } else {
                this.x += 8;
            }

/*         setInterval(() => {
            if(this.otherDirection == true) {
                this.x -= 12;
            } else {
                this.x += 12;
            }
        }, 40); */

    }

    setStoppableInterval(fn, time) {
        let id = setInterval(fn, time);
        this.intervalIds.push(id);
    }
}
