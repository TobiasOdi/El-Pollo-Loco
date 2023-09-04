class World {
    character = new Character();
    bottle = new ThrowableObject();
    endboss = new Endboss();
    chicken = new Chicken();
    chickenSmall = new ChickenSmall();
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
    throwObject = true;
    movableObject = new MovableObject();
    collectCoinSound = new Audio('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/audio/coins2.mp3');
    collectBottleSound = new Audio('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/audio/collectBottle.mp3');
    loseCoins;
    audioVolume = false;
    proximity = false;

    //=========================================================== BASE FUNCTIONS ======================================================
    /**
     * Creates the canvas and runs all the functions (draw(), run(), etc.)
     * @param {element} canvas - element where the objects can be drawn to
     * @param {class} keyboard - contains the controls for the character
     */
    constructor(canvas, keyboard, audioVolume) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.audioVolume = audioVolume;
        this.draw();
        this.setWorld();
        this.run();
    };

    /**
     * Sets the world
     * @property {class} character - class of character
     */
    setWorld(){
        this.character.world = this;
    }

    /**
     * This function runs all the the "check" functions.
     */
    run() {
        setInterval(() => {
            this.checkCollisionsEnemy();
            this.checkCollisionsEndboss();
            this.checkBottleHitEndboss();
            this.checkNearEndboss();
        }, 200);

        setInterval(() => {
            this.checkCollisionsEnemyTop();
            this.checkBottleHitEnemy();
            this.checkCollisionsCoins();
            this.checkCollisionsBottles();
            this.checkProximity();
            this.checkAudioEnemies();
            this.checkAudioEndoboss();
            this.checkAudioThrowableObjects();
        }, 1000 / 60);

        setInterval(() => {this.checkThrowObject();}, 80);
    }

//=========================================================== COLLISION CHECKS ======================================================
    /**
     * This function checks the collision between the character and the enemies.
     */
    checkCollisionsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if(enemy.speed > 0 && this.character.isColliding(enemy) && !this.character.isAboveGround()){
                this.character.hit();
                this.statusbarHealth.setPercentageHealth(this.character.energy);

                if(this.character.coinsColected > 0) {
                    this.character.coinsColected--;
                    this.statusbarCoins.setPercentageCollectables(this.character.coinsColected);
                } else {
                    this.character.coinsColected = 0;
                    this.statusbarCoins.setPercentageCollectables(this.character.coinsColected);
                }
            }});
    }

    /**
     * This function checks if the character collides on top of an enemy.
     */
    checkCollisionsEnemyTop() {
        this.level.enemies.forEach((enemy) => {
            if(enemy.speed > 0 && this.character.isColliding(enemy)){
                if(this.character.isAboveGround() && !this.character.isHurt() && this.character.speedY < 0) {
                    enemy.speed = 0;
                }
            }});
    }

    /**
     * This function checks the collision between the character and the endboss.
     */
    checkCollisionsEndboss() {
        this.level.endboss.forEach((endboss) => {
            if(this.character.isColliding(endboss)){
                this.character.hitByEndboss();
                this.statusbarHealth.setPercentageHealth(this.character.energy);
                this.character.pushedBack();
    
                if(this.character.coinsColected > 0) {
                    this.character.coinsColected--;
                    this.statusbarCoins.setPercentageCollectables(this.character.coinsColected);
                } else {
                    this.character.coinsColected = 0;
                    this.statusbarCoins.setPercentageCollectables(this.character.coinsColected);
                }
            }
        });
    }

    /**
     * This function checks the collision for each throwableObject (bottle) with an enemy.
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
     * This function checks the collision for each throwableObject (bottle) with the endboss.
     */
    checkBottleHitEndboss() {
        this.throwableObject.forEach((bottle) => {
            this.level.endboss.forEach((endboss) => {
                if(bottle.isColliding(endboss)){
                    endboss.endbossIsHit();
                    this.statusbarHealthEndboss.setPercentageHealth(endboss.energyEndboss);
                    bottle.bottleHit = true;
                }
            })
        })
    };

    /**
     * This function lets the character colect a coin and updates the statusbar.
     */
    checkCollisionsCoins() {
        this.level.coins.forEach((coin) => {
            if(this.character.isColliding(coin)){
                this.character.colectCoins();
                this.statusbarCoins.setPercentageCollectables(this.character.coinsColected);
                if(this.audioVolume == true){
                    this.collectCoinSound.play();
                }
                coin.x = 0;
                coin.y = -100;
            }
        });
    }

    /**
     * This function lets the character colect a coin and updates the statusbar.
     */
    checkCollisionsBottles() {
        this.level.bottles.forEach((bottle) => {
            if(this.character.isColliding(bottle)){
                this.character.colectBottles();
                this.statusbarBottles.setPercentageCollectables(this.character.bottlesColected);
                if(this.audioVolume == true){
                    this.collectBottleSound.play();
                }
                bottle.x = 0;
                bottle.y = -100;
            }
        });
    }

//=========================================================== CHECK CHARACTER PRIXIMITY ======================================================
    /**
     * This function cheks if the character is near the endboss.
     */
    checkNearEndboss() {
        this.level.endboss.forEach((endboss) => {
            if(this.character.x > 3850) {
                endboss.nearEndboss = true;
            }
        });
    }

//=========================================================== CHECK FOR THROWABLE OBJECT ======================================================
    /**
     * This function lets the character throw a bottle and updates the statusbar.
     */
    checkThrowObject() {
        if(this.keyboard.throw) {
            if(this.character.bottlesColected > 0) {
                if(this.throwObject == true){
                    if(this.character.otherDirection == true) {
                        this.throwBottleOtherDirection();
                    } else {
                        this.throwBottleCorrectDirection();
                    }
                }
            } else {
                this.character.bottlesColected = 0;
                this.statusbarBottles.setPercentageCollectables(this.character.bottlesColected);
            }
        }
    }

    /**
     * This function lets the character throw a bottle to the left side.
     */
    throwBottleOtherDirection() {
        this.throwObject = false;
        let bottle = new ThrowableObject(this.character.x - 60, this.character.y + 100, this.otherDirection = true);
        this.throwableObject.push(bottle);
        this.character.bottlesColected--;
        this.statusbarBottles.setPercentageCollectables(this.character.bottlesColected);
        setTimeout(() => {
            this.throwObject = true;
        }, 400);
    }

    /**
     * This function lets the character throw a bottle to the right side.
     */
    throwBottleCorrectDirection() {
        this.throwObject = false;
        let bottle = new ThrowableObject(this.character.x + 60, this.character.y + 100,this.otherDirection = false);
        this.throwableObject.push(bottle);
        this.character.bottlesColected--;
        this.statusbarBottles.setPercentageCollectables(this.character.bottlesColected);
        setTimeout(() => {
            this.throwObject = true;
        }, 400);
    }

//================================================================ SOUND ============================================================
/**
 * This function checks if the sounds for the enemies are mute or not.
 */
checkAudioEnemies() {
    this.level.enemies.forEach((enemy) => {
        if(this.audioVolume == true){
            enemy.audioVolume = true;
        } else {
            enemy.audioVolume = false;
        }
    });
}

/**
 * This function checks if the sounds for the endboss is mute or not.
 */
checkAudioEndoboss() {
    this.level.endboss.forEach((endboss) => {
        if(this.audioVolume == true){
            endboss.audioVolume = true;
        } else {
            endboss.audioVolume = false;
        }
    });
}

/**
 * This function checks if the sounds for the throwable objects are mute or not.
 */
checkAudioThrowableObjects() {
    this.throwableObject.forEach((bottle) => {
        if(this.audioVolume == true){
            bottle.audioVolume = true;
        } else {
            bottle.audioVolume = false;
        }
    });
}

//=========================================================== CANVAS FUNCTIONS ======================================================
    /**
     * This function draws all the elemnts on the canvas.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.addBackgroundObjects();
        this.ctx.translate(-this.cameraX, 0); // Kamera bzw. Koordinatensystem nach hinten verschieben
        // ------------- Space for fixed objects --------------
        this.addStatusbars();
        // ----------------------------------------------------
        this.ctx.translate(this.cameraX, 0); // Kamera bzw. Koordinatensystem nach vorne verschieben
        this.addMovableObjects();
        this.ctx.translate(-this.cameraX, 0);
        let self = this;                    //in der Funktion kann das Wort 'this' nicht verwendet werden, darum weist man diesem eine Variable zu
        requestAnimationFrame(function() {  //Die Funktion wird so oft aufgerufen wie es mit der Grafikkarte möglich ist.
            self.draw();
        });
    };

    /**
     * This function adds all the background objects to the canvas.
     */
    addBackgroundObjects() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
    }

    /**
     * This function adds all the statusbars to the canvas.
     */
    addStatusbars() {
        this.addToMap(this.statusbarHealth);
        this.addToMap(this.statusbarCoins);
        this.addToMap(this.statusbarBottles);
        if(this.proximity){
            this.addToMap(this.statusbarHealthEndboss);
            this.addToMap(this.statusbarHealthEndbossLogo);
        }
    }

    checkProximity() {
        //let characterX = this.character.x + this.character.width - this.character.offset.right;
        //let endbossX = this.endboss.x;
        //this.difference = endbossX - characterX;

        this.level.endboss.forEach((endboss) => {
            if(this.character.isNearEndboss(endboss)){
                this.proximity = true;
            } else {
                this.proximity = false;
            }
        });
    }


    /**
     * This function adds all the movable objects to the canvas.
     */
    addMovableObjects() {
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObject);
    }

    /**
     * This function outsources the the forEach() Method to clean up the con in the draw() function.
     * @param {object} mo - movable objects (chicken, character etc.)
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * This function adds an object to the map in the desired direction.
     * @param {object} mo - movable object (chicken, character etc.)
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