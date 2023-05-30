class ThrowableObject extends MovableObject {
    speedY = 30;
    speedX = 30;


    constructor(x, y) {
        super().loadImage('../../img/6_salsa_bottle/salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 60;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);
    } 

    // => Falsche werfen mit Tastenkombination

    // World braucht ein Array für throwableObjects
}