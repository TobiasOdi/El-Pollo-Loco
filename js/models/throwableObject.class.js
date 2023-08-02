class ThrowableObject extends MovableObject {
    speedY = 30;
    speedX = 30;
    level = level1;
    otherDirection;

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
            this.playAnimation(this.imagesRotate);
        }, 80);

/*         if(this.bottleHit == true) {
            setInterval(() => {
                this.playAnimation(this.imagesImpact);
            }, 80);
        } else {
            this.throw();
            setInterval(() => {
                this.playAnimation(this.imagesRotate);
            }, 80);
        } */
    }
   
    throw() {
            this.speedY = 30;
            this.applyGravity();

            setInterval(() => {
                if(this.otherDirection == true) {
                    this.x -= 7;
                } else {
                    this.x += 7;
                }
            }, 25);       
    }   

    // World braucht ein Array für throwableObjects
}
