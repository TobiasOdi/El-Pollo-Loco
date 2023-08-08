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

    /**
     * Load enemy  an the different animations and position on the canvas.
     */
    constructor() {
        // => super() gilt nur für Methoden!!
        super().loadImage('../../img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);
        this.x = 400 + Math.random() * 4000;
        this.speed = 3 + Math.random() * 0.5;
        this.animate();    
    }

    /**
     * Play animations depending on different action.
     */
    animate() {
        setInterval(() => {
            if(this.speed == 0) {
                this.playAnimation(this.imagesDead);
                setTimeout(() => {
                    this.x = 0;
                    this.y = -100;
                    }, 1500);
            } else {
                this.moveLeft();
                this.playAnimation(this.imagesWalking);
            }
        }, 100);
    }
}