class ChickenSmall extends MovableObject {
    y = 380;
    height = 40;
    width = 40;
    imagesWalking = [
        '../../img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        '../../img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        '../../img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    imagesDead = [
        '../../img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    offset =  {
        top: 0,
        left: 0,
        right: 0, 
        bottom: 0
    }

    constructor() {
        // => super() gilt nur für Methoden!!
        super().loadImage('../../img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);
        this.x = 400 + Math.random() * 2000;
        this.speed = 0.8 + Math.random() * 0.5;
        this.animate();    
    }

    animate() {
        setInterval(()  => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.imagesWalking);
        }, 200);

/*         setInterval(() => {
            if(this.isCollidingTop()) {
                // Clear Interval moveLeft
                // Clear Interval playAnimation Walking
                this.playAnimation(this.imagesDead);
                }
            }, 50)  */
    }
}