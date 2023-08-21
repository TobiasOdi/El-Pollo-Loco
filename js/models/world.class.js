class World {
    character = new Character();
    bottle = new ThrowableObject();
    endboss = new Endboss();
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = 0;
    statusbarHealth = new StatusbarHealth();
    statusbarHealthEndboss = new StatusbarHealthEndboss();
    statusbarHealthEndbossLogo = new StatusbarHealthEndbossLogo();
    statusbarCoins = new StatusbarCoins();
    statusbarBottles = new StatusbarBottles();
    coins = new Coins();
    bottles = new Bottles();
    throwableObject = [];
    movableObject = new MovableObject();
    collectCoinSound = new Audio('../audio/coins2.mp3');
    collectBottleSound = new Audio('../audio/collectBottle.mp3');
    loseCoins;
//=========================================================== BASE FUNCTIONS ======================================================

    /**
     * Creates the canvas and executes alle the functions (draw(), run())
     * @param {element} canvas - element where the objects can be drawn to
     * @param {class} keyboard - contains the controls for the character
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    };

    /**
     * 
     */
    setWorld(){
        this.character.world = this;
    }

    /**
     * Runs all de check funtctions
     */
    run() {
        setInterval(() => {
            this.checkCollisionsEnemy();
            this.checkCollisionsEndboss();
            this.checkBottleHitEndboss();
            this.checkNearEndboss();
            this.checkAttackRangeEndboss();
        }, 200);

        setInterval(() => {
            this.checkCollisionsEnemyTop();
            this.checkBottleHitEnemy();
            this.checkCollisionsCoins();
            this.checkCollisionsBottles();
        }, 1000 / 60);

        setInterval(() => {
            this.checkThrowObject();
        }, 80);
    }

//=========================================================== COLLISION CHECKS ======================================================

    /**
     * Checks the collision with enemies and performes the necesary action.
     */
    checkCollisionsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if(enemy.speed > 0 && this.character.isColliding(enemy) && !this.character.isAboveGround()){
                this.character.hit();
                this.statusbarHealth.setPercentage(this.character.energy);

                if(this.character.coinsColected > 0) {
                    this.character.coinsColected--;
                    this.statusbarCoins.setPercentage(this.character.coinsColected);
                } else {
                    this.character.coinsColected = 0;
                    this.statusbarCoins.setPercentage(this.character.coinsColected);
                }
            }});
    }

    checkCollisionsEnemyTop() {
        this.level.enemies.forEach((enemy) => {
            if(enemy.speed > 0 && this.character.isColliding(enemy)){
                if(this.character.isAboveGround() && !this.character.isHurt()) {
                    enemy.speed = 0;
                }
            }});
    }

    /**
     * Checks the collision with the endboss and performes the necessary action.
     */
    checkCollisionsEndboss() {
        this.level.endboss.forEach((endboss) => {
            if(this.character.isColliding(endboss)){
                this.character.hitByEndboss();
                this.statusbarHealth.setPercentage(this.character.energy);
                this.character.pushedBack();
    
                if(this.character.coinsColected > 0) {
                    this.character.coinsColected--;
                    this.statusbarCoins.setPercentage(this.character.coinsColected);
                } else {
                    this.character.coinsColected = 0;
                    this.statusbarCoins.setPercentage(this.character.coinsColected);
                }
            }
        });
    }

    checkAttackRangeEndboss() {
        this.level.endboss.forEach((endboss) => {
            if((this.character.x + this.character.width + 30) > endboss.x){
                endboss.attackRangeEndboss = true;
            } else {
                endboss.attackRangeEndboss = false;

            }
        });
    }

    /**
     * Checks the collision for each throwableObject (bottle) with an enemy.
     */
    checkBottleHitEnemy() {
        this.throwableObject.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if(bottle.isColliding(enemy)){
                    enemy.speed = 0;
                    bottle.bottleHit = true;
                }
            })
        })
    };

    /**
     * Checks the collision for each throwableObject (bottle) with the endboss.
     */
    checkBottleHitEndboss() {
        this.throwableObject.forEach((bottle) => {
            this.level.endboss.forEach((endboss) => {
                if(bottle.isColliding(endboss)){
                    endboss.endbossIsHit();
                    this.statusbarHealthEndboss.setPercentage(endboss.energyEndboss);
                    bottle.bottleHit = true;
                }
            })
        })
    };

    /**
     * Lets the character colect a coin and updates the statusbar.
     */
    checkCollisionsCoins() {
        this.level.coins.forEach((coin) => {
            if(this.character.isColliding(coin)){
                this.character.colectCoins();
                this.statusbarCoins.setPercentage(this.character.coinsColected);
                this.collectCoinSound.play();
                coin.x = 0;
                coin.y = -100;
            }
        });
    }

    /**
     * Lets the character colect a bottle and updates the statusbar.
     */
    checkCollisionsBottles() {
        this.level.bottles.forEach((bottle) => {
            if(this.character.isColliding(bottle)){
                this.character.colectBottles();
                this.statusbarBottles.setPercentage(this.character.bottlesColected);
                this.collectBottleSound.play();
                bottle.x = 0;
                bottle.y = -100;
            }
        });
    }

//=========================================================== CHECK CHARACTER PRIXIMITY ======================================================

    /**
     * Cheks if character is near endboss
     */
    checkNearEndboss() {
        this.level.endboss.forEach((endboss) => {
            if(this.character.x > 3700) {
                endboss.nearEndboss = true;
            }
        });
    }

//=========================================================== CHECK FOR THROWABLE OBJECT ======================================================
    /**
     * Lets the character throw a bottle and updates the statusbar.
     */
    checkThrowObject() {
        if(this.keyboard.throw) {
            if(this.character.bottlesColected > 0) {
                if(this.character.otherDirection == true) {
                    let bottle = new ThrowableObject(this.character.x - 60, this.character.y + 100, this.otherDirection = true);
                    this.throwableObject.push(bottle);
                    this.character.bottlesColected--;
                    this.statusbarBottles.setPercentage(this.character.bottlesColected);
                } else {
                    let bottle = new ThrowableObject(this.character.x + 60, this.character.y + 100,this.otherDirection = false);
                    this.throwableObject.push(bottle);
                    this.character.bottlesColected--;
                    this.statusbarBottles.setPercentage(this.character.bottlesColected);
                }
            } else {
                this.character.bottlesColected = 0;
                this.statusbarBottles.setPercentage(this.character.bottlesColected);

            }
        }
    }

//=========================================================== CANVAS FUNCTIONS ======================================================

    /**
     * The function draws all the elemnts on the canvas.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.cameraX, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);

        this.ctx.translate(-this.cameraX, 0); // Kamera bzw. Koordinatensystem nach hinten verschieben

        // ------------- Space for fixed objects --------------
        this.addToMap(this.statusbarHealth);
        this.addToMap(this.statusbarCoins);
        this.addToMap(this.statusbarBottles);
        this.addToMap(this.statusbarHealthEndboss);
        this.addToMap(this.statusbarHealthEndbossLogo);

        // ----------------------------------------------------

        this.ctx.translate(this.cameraX, 0); // Kamera bzw. Koordinatensystem nach vorne verschieben

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObject);

        this.ctx.translate(-this.cameraX, 0);

        let self = this;                    //in der Funktion kann das Wort 'this' nicht verwendet werden, darum weist man diesem eine Variable zu
        requestAnimationFrame(function() {  //Die Funktion wird so oft aufgerufen wie es mit der Grafikkarte möglich ist.
            self.draw();
        });
    };

    /**
     * Adds the objects to the canvas
     * @param {object} objects 
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * Flips the image of the character according in which direction it walks
     * @param {*} mo 
     */
    addToMap(mo) {
        if(mo.otherDirection) {
            mo.flipImage(this.ctx);
        }
        
        mo.draw(this.ctx);
        //mo.drawFrame(this.ctx);

        if(mo.otherDirection) {
            mo.flipImageBack(this.ctx);
        }
    }
}