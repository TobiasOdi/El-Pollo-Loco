class Level {
    enemies;
    clouds;
    backgroundObjects;
    coins;
    levelEndX = 2200;

    constructor(enemies, clouds, backgroundObjects, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
    }
}