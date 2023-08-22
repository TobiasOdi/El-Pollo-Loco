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
    lastHitEndboss = 0;
    bottleHit;

//======================================================== WORLD FUNCTIONS =====================================================================
    /**
     * This function sets the gravity (how fast the objects fall).
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
     * This function checks if an object is above ground > Throwable objects should always fall.
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
     * This function checks the collisions between any object.
     * @param {element} mo - movable object (character, coin, bottle, chicken etc.)
     * @returns 
     */
    isColliding (mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

//======================================================== CHARACTER FUNCTIONS =====================================================================
    /**
     * This funciton subtracts the characters energy if hit by an enemy.
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
     * This function subtracts the characters energy if hit by endboss.
     */
    hitByEndboss() {
        this.energy -= 20;
        if(this.energy < 0) {
            this.energy = 0;
        } else  {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * This function checkes the time passed since the character has last been hit.
     * @returns 
     */
    isHurt(){
        let timePassed = new Date().getTime() - this.lastHit; // Differenz in Milisekunden
        timePassed = timePassed / 1000; // Differenz in Sekunden
        return timePassed < 0.5;
    }

    /**
     * This function returns the value 0 for the characters energy.
     * @returns 
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * This function pushes the character back a certain distance.
     */
    pushedBack() {
        this.x -= 250;
    }

    /**
    * This function adds a coin to coinsColected
    */
    colectCoins() {
        this.coinsColected += 1;
        if(this.coinsColected >= 10) {
            this.coinsColected = 10;
        }
    }
    
    /**
     * This function adds a bottle to  bottlesColected
     */
    colectBottles() {
        this.bottlesColected += 1;
        if(this.bottlesColected >= 10) {
            this.bottlesColected = 10;
        }
    }

    /**
     * This function makes an object move right.
     */
    moveRight() {
        this.x += this.speed;
    }
    
    /**
     * This function makes an object move left.
     */
    moveLeft() {
        this.x -= this.speed;
    }
    
    /**
     * This funciton makes the character jump.
     */
    jump() {
        this.speedY = 30;
    }

//======================================================== ENDBOSS FUNCTIONS =====================================================================
    /**
     * This function subtracts the endbosses energy.
     */
    endbossIsHit() {
        this.energyEndboss -= 15;
        if(this.energyEndboss < 0) {
            this.energyEndboss = 0;
        } else  {
            this.lastHitEndboss = new Date().getTime();
        }
    }


    /**
     * This function checkes the time passed since the endboss has last been hit.
     * @returns 
     */
    isHurtEndboss(){
        let timePassed = new Date().getTime() - this.lastHitEndboss; // Differenz in Milisekunden
        timePassed = timePassed / 1000; // Differenz in Sekunden
        return timePassed < 0.5;
    }

//======================================================== CHICKEN FUNCTION =====================================================================
    /**
     * This function returns the speed 0 of an enemy.
     */
    die() {
        return this.speed == 0;
    }

//======================================================== BASE FUNCTIONS =====================================================================
    /**
     * This function creates a new image.
     * @param {string} path - image path
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * This function draws the image to the canvas.
     * @param {element} ctx - tool to draw on the canvas
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * This function flips the characters image to the other direction.
     * @param {element} ctx - tool to draw on the canvas
     */
    flipImage(ctx){
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }

    /**
     * This function flips the characters image back to the initial direction.
     * @param {element} ctx - tool to draw on the canvas
     */
    flipImageBack(ctx){
        this.x = this.x * -1;
        ctx.restore();
    }

    /**
     * This function loads images into the imageCache array.
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
     * This functions plays an specific animaiton.
     * @param {Array} images - array with the images of the current animation
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 0 % 6
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}