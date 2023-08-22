class DrawableObject {
    img;
    imageCache = [];
    currentImage = 0;
    x = 120;
    y = 215;
    height = 150;
    width = 100;

    /**
     * This function creates new image => it is the same as > this.img = document.getElementById('image') <img id="image">
     * @param {string} path - path to the corresponding image
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * This function drwas the images on the canvas. It needs the variables for the position (x, y) and the with and height.
     * @param {element} ctx - tool to draw on the canvas / canvas.getContext('2d')
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * This function loads images into the imagCache array.
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Drwas a blue frame around avery object/element
     * @param {element} ctx - tool to draw on the canvas / canvas.getContext('2d')
     */
    drawFrame(ctx) {
        if(this instanceof Character || this instanceof Chicken || this instanceof ChickenSmall || this instanceof Endboss || this instanceof Coins || this instanceof Bottles) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    } 
}