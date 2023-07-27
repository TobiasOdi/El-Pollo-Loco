class Chicken extends MovableObject {
    y = 360;
    height = 60;
    width = 60;
    imagesWalking = [
        '../../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    imagesDead = [
        '../../img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
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
        super().loadImage('../../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);
        this.x = 400 + Math.random() * 4000;
        this.speed = 0.8 + Math.random() * 0.25;
        this.animate();
    }

    /**
     * Play animations depending on different action.
     */
    animate() {
        //setStoppableInterval(() => this.moveLeft, 1000 / 60);
/*         setInterval(()  => {
            this.moveLeft();
        }, 1000 / 60);
 */    
        setInterval(() => {
            if(this.speed == 0) {
                this.playAnimation(this.imagesDead);
                setTimeout(() => {
                    this.x = 0;
                    this.y = -100;
                }, 1000);
    
            } else{
                this.playAnimation(this.imagesWalking);
                this.moveLeft();
            }
        }, 50);
    }

}