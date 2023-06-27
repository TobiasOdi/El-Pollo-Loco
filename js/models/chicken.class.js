class Chicken extends MovableObject {
    y = 360;
    height = 60;
    width = 60;
    imagesWalking = [
        '../../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    constructor() {
        // => super() gilt nur für Methoden!!
        super().loadImage('../../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.imagesWalking);

        this.x = 400 + Math.random() * 2000;
        this.speed = 0.8 + Math.random() * 0.25;

        this.animate();    
    }

    animate() {
        setInterval(()  => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.imagesWalking);
        }, 200);
    }
}