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
        this.animate();
    }

    animate() {
        this.throw();

        setInterval(() => {
            if(this.bottleHit == true) {
                this.playAnimation(this.imagesImpact);
                this.speedY = 0;
                this.acceleration = 0;
                this.intervalIds.forEach(clearInterval);
            } else {
                this.playAnimation(this.imagesRotate);
            }
        }, 80);
    }
   
    throw() {
        this.speedY = 30;
        this.applyGravity();

        /* setInterval(() => {
            this.playAnimation(this.imagesRotate);
        }, 80); */

        this.setStoppableInterval(this.bottleMovement(), 40);
    }   

    bottleMovement() {
        if(this.otherDirection == true) {
            this.x -= 7;
        } else {
            this.x += 7;
        }
    }

    setStoppableInterval(fn, time) {
        let id = setInterval(fn, time);
        this.intervalIds.push(id);
    }

    // World braucht ein Array für throwableObjects
}
