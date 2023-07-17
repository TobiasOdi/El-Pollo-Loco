class BackgroundObject extends MovableObject {

    width = 720;
    height = 550;

    /**
     * Load backgroud images
     * @param {string} imagePath - path to the corresponding image
     * @param {number} x - the x coordinate for the object
     */
    constructor(imagePath, x) {
        // => super() gild nur für Methoden!!
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}