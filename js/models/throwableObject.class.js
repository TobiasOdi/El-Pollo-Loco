class ThrowableObject extends MovableObject {
    speedY = 30;
    speedX = 30;
    level = level1;
    otherDirection;
    intervalIds = [];


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
        this.acceleration = 3.5;
        this.animate();
        this.throw();
    }

    animate() {
        this.throw

        setInterval(() => {
            if(this.bottleHit == true || this.y > 345) {
                this.intervalIds.forEach(clearInterval);
                this.playAnimation(this.imagesImpact);
                //this.speedY = 0;
                //this.acceleration = 0;
                setTimeout(() => {
                    this.x = 0;
                    this.y = -100;
                }, 250);
            } else {
                this.playAnimation(this.imagesRotate);
            }
        }, 80);
    }
   
    throw() {
        this.applyGravity(); 
        setInterval(() => {
            if(this.otherDirection == true) {
                this.x -= 12;
            } else {
                this.x += 12;
            }
        }, 40);
    }   
    // World braucht ein Array für throwableObjects
}
