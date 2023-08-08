class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;

    /**
     * Loads clouds, play animation and position on the canvas.
     */
    constructor() {
        // => super() gild nur für Methoden!!
        super().loadImage('../../img/5_background/layers/4_clouds/1.png');
        this.x = 0 + Math.random() * 500;
        this.animate();
    }

    /**
     * Play moving animation
     */
    animate() {
        this.moveLeft();
    }
}