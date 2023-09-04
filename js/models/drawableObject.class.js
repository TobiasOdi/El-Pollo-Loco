class DrawableObject {
    img;
    imageCache = [];
    currentImage = 0;
    x = 120;
    y = 215;
    height = 150;
    width = 100;
    percentage;


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

    /**
     * Sets the path to the correct image an loads it to the image cache
     * @param {number} percentage - number of collected coins
     */
    setPercentageCollectables(percentage) {
        this.percentage = percentage; // => 0 .. 5
        let path = this.images[this.resolveImageIndexCollectables()];
        this.img = this.imageCache[path]; // jeweiliges Bild aus dem Bilder Cache laden
    }

    /**
     * Sets the path to the correct image an loads it to the image cache
     * @param {number} percentage - number of collected coins
     */
    setPercentageHealth(percentage) {
        this.percentage = percentage; // => 0 .. 5
        let path = this.images[this.resolveImageIndexHealth()];
        this.img = this.imageCache[path]; // jeweiliges Bild aus dem Bilder Cache laden
    }

    /**
     * Returns the the index for the path of the correct image.
     * @returns 
     */
    resolveImageIndexCollectables() {
        if(this.percentage == 0) {
            return 0;
        } else if(this.percentage <= 2) {
            return 1;
        } else if(this.percentage <= 4) {
            return 2;
        } else if(this.percentage <= 6) {
            return 3;
        } else if(this.percentage <= 8) {
            return 4;
        } else {
            return 5;
        }
    }

    /**
     * Returns the the index for the path of the correct image.
     * @returns 
     */
    resolveImageIndexHealth() {
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