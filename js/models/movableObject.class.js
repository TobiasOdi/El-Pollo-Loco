class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    energyEndboss = 100;
    coinsColected = 0;
    bottlesColected = 0;
    lastHit = 0;
    //intervalIds = [];


    offset =  {
        top: 0,
        left: 0,
        right: 0, 
        bottom: 0
    }

    /**
 * A function to store every interval in an array in order to stop them if needed.
 * @param {function} fn - specific function
 * @param {number} time - Interval time, how often the function is beeing run
 */
/*     setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    this.intervalIds.push(id);
    } */

    /**
     * Sets the gravity, how fast the objects fall
     */
    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 20);
    }

    /**
     * Checks if an object ist above ground > Throwable objects should alwasys fall
     * @returns 
     */
    isAboveGround() {
        if(this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 175;
        }
    }
    
    /**
     * Creates a new image
     * @param {string} path - image path
     */
    loadImage(path) {
        this.img = new Image();    // ist das gleiche wie this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    /**
     * Draws the image to the canvas.
     * @param {*} ctx 
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Checks the collisions with the coins and bottles
     * @param {element} mo - coin or bottle
     * @returns 
     */
    isColliding (mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * Checks the collision with enemies
     * @param {element} mo - chicken, small chicken and endboss
     * @returns 
     */
    isCollidingEnemy (mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
        //this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
        this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
        this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * Checks the collision on top of the small enemies
     * @param {element} mo - chicken, small chicken
     * @returns 
     */
    isCollidingTop(mo) {
        return this.y + this.height >= mo.y + mo.offset.top;
    }

    /**
     * Subtracts character energy
     */
    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        } else  {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Adds a coin to coinsColected
     */
    colectCoins() {
        this.coinsColected += 1;
        if(this.coinsColected >= 10) {
            this.coinsColected = 10;
        }
    }

    /**
     * Adds a bottle to  bottlesColected
     */
    colectBottles() {
        this.bottlesColected += 1;
        if(this.bottlesColected >= 10) {
            this.bottlesColected = 10;
        }
    }

    /**
     * 
     * @returns 
     */
    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit; // Differenz in Milisekunden
        timePassed = timePassed / 1000; // Differenz in Sekunden
        return timePassed < 0.5;
    }

    /**
     * The function returns the value 0 for the character energy
     * @returns 
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Sets the speed of an enemy to 0.
     */
    die() {
        this.speed = 0;
    }

    /**
     * 
     * @param {*} ctx - 
     */
    flipImage(ctx){
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }

    /**
     * 
     * @param {*} ctx 
     */
    flipImageBack(ctx){
        this.x = this.x * -1;
        ctx.restore();
    }

    /**
     * Loading images into the imageCache array
     * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
     */

    /**
     * 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * 
     * @param {*} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 6
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Makes the character move right.
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Makes the character move left.
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Makes the character jump.
     */
    jump() {
        this.speedY = 30;
    }

}