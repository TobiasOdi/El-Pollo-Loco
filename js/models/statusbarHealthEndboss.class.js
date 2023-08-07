class StatusbarHealthEndboss extends DrawableObject {

    images = [
        '../../img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        '../../img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        '../../img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        '../../img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        '../../img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        '../../img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
    ];

    percentage = 100;

    /**
     * Loads the statusbar and positions it on the canvas.
     */
    constructor() {
        super().loadImage('../../img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png');  // Methoden vom übergeordneten Objekt werden so initialisiert!
        this.loadImages(this.images);
        this.x = 500;
        this.y = 60;
        this.height = 60;
        this.width = 200;
        this.setPercentage(100);
    }

    /**
     * Sets the path to the correct image an loads it to the image cache
     * @param {number} percentage - health of the character
     */
    setPercentage(percentage) {
        this.percentage = percentage; // => 0 .. 5
        let path = this.images[this.resolveImageIndex()];
        this.img = this.imageCache[path]; // jeweiliges Bild aus dem Bilder Cache laden
    }

    /**
     * Returns the the index for the path of the correct image.
     * @returns 
     */
    resolveImageIndex() {
        if(this.percentage == 100) {
            return 5;
        } else if(this.percentage > 80) {
            return 4;
        } else if(this.percentage > 60) {
            return 3;
        } else if(this.percentage > 40) {
            return 2;
        } else if(this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}