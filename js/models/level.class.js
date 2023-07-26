class Level {
    enemies;
    endboss;
    clouds;
    backgroundObjects;
    coins;
    bottles;
    levelEndX = 2200;

    /**
     * Defines all the necessary objects/variables for the different levels.
     * @param {array} enemies - number of enemies
     * @param {array} clouds - clouds
     * @param {array} backgroundObjects - all background objects
     * @param {array} coins - number of coins
     * @param {array} bottles - number of bottles
     */
    constructor(enemies, endboss, clouds, backgroundObjects, coins, bottles) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }
}