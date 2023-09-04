class Cloud extends MovableObject {
    y = 20;
    height = 250;
    width = 500;

    /**
     * This function loads the "chicken small" enemy and sets the coordinates for there placement on the canvas
     */
    constructor() {
        // => super() gild nur für Methoden!!
        super().loadImage('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/5_background/layers/4_clouds/1.png');
        this.x = 0 + Math.random() * 500;
        this.animate();
    }

    /**
     * This function plays the animation moving left
     */
    animate() {
        this.moveLeft();
    }
}