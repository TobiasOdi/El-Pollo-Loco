class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    cameraX = 0;
    statusbarHealth = new StatusbarHealth();
    statusbarCoins = new StatusbarCoins();
    statusbarBottles = new StatusbarBottles();
    coins = new Coins();
    bottles = new Bottles();
    throwableObject = [];
    movableObject = new MovableObject();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    };

    setWorld(){
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisionsEnemy();
            //this.checkCollisionsTop();
        }, 200);

        setInterval(() => {
            this.checkCollisionsCoins();
            this.checkCollisionsBottles();
        }, 1000 / 60);

        setInterval(() => {
            this.checkThrowObject();
        }, 120);
    }

    checkCollisionsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if(this.character.isCollidingEnemy(enemy)){
                this.character.hit();
                this.statusbarHealth.setPercentage(this.character.energy);

                if(this.character.coinsColected > 0) {
                    this.character.coinsColected--;
                    this.statusbarCoins.setPercentage(this.character.coinsColected);
                } else {
                    this.character.coinsColected = 0;
                    this.statusbarCoins.setPercentage(this.character.coinsColected);
                }
            } else if(this.character.isCollidingTop(enemy)) {
                enemy.die();
            }
        });
    }

    checkCollisionsCoins() {
        this.level.coins.forEach((coin) => {
            if(this.character.isColliding(coin)){
                this.character.colectCoins();
                this.statusbarCoins.setPercentage(this.character.coinsColected);
                coin.x = 0;
                coin.y = -100;
            }
        });
    }

    checkCollisionsBottles() {
        this.level.bottles.forEach((bottle) => {
            if(this.character.isColliding(bottle)){
                this.character.colectBottles();
                this.statusbarBottles.setPercentage(this.character.bottlesColected);
                bottle.x = 0;
                bottle.y = -100;
            }
        });
    }

    checkThrowObject() {
        if(this.keyboard.throw) {
            if(this.character.bottlesColected > 0) {
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObject.push(bottle);
                this.character.bottlesColected--;
                this.statusbarBottles.setPercentage(this.character.bottlesColected);

            } else {
                this.character.bottlesColected = 0;
                this.statusbarBottles.setPercentage(this.character.bottlesColected);

            }
        }
    }

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
        // ----------------------------------------------------

        this.ctx.translate(this.cameraX, 0); // Kamera bzw. Koordinatensystem nach vorne verschieben

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObject);


        this.ctx.translate(-this.cameraX, 0);

        let self = this;                    //in der Funktion kann das Wort 'this' nicht verwendet werden, darum weist man diesem eine Variable zu
        requestAnimationFrame(function() {  //Die Funktion wird so oft aufgerufen wie es mit der Grafikkarte möglich ist.
            self.draw();
        });
    };

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }
    addToMap(mo) {
        if(mo.otherDirection) {
            mo.flipImage(this.ctx);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if(mo.otherDirection) {
            mo.flipImageBack(this.ctx);
        }
    }
}