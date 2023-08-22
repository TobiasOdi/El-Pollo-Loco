class BackgroundObject extends MovableObject {

    width = 720;
    height = 550;

    /**
     * This function loads the backgroud images and sets the coordinates for there placement on the canvas
     * @param {string} imagePath - path to the corresponding image
     * @param {number} x - the x coordinate for the object
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}