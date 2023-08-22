let level1;

/**
 * This function contains all elements for the first level on the world that need to be drawn.
 */
async function startLevel() {
    level1 = new Level(
        [
            new Chicken(),
            new Chicken(),
            new ChickenSmall(),
            new Chicken(),
            new ChickenSmall(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new ChickenSmall(),
            new ChickenSmall(),
            new ChickenSmall(),
            new Chicken()
        ],
    
        [
            new Endboss()     
        ],
    
        [
            new Cloud()
        ],
    
        [
            new BackgroundObject('../../img/5_background/layers/air.png', -719),
            new BackgroundObject('../../img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('../../img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('../../img/5_background/layers/1_first_layer/2.png', -719),
    
            new BackgroundObject('../../img/5_background/layers/air.png', 0),
            new BackgroundObject('../../img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('../../img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('../../img/5_background/layers/1_first_layer/1.png', 0),
    
            new BackgroundObject('../../img/5_background/layers/air.png', 719),
            new BackgroundObject('../../img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('../../img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('../../img/5_background/layers/1_first_layer/2.png', 719),
    
            new BackgroundObject('../../img/5_background/layers/air.png', 719*2),
            new BackgroundObject('../../img/5_background/layers/3_third_layer/1.png', 719*2),
            new BackgroundObject('../../img/5_background/layers/2_second_layer/1.png', 719*2),
            new BackgroundObject('../../img/5_background/layers/1_first_layer/1.png', 719*2),
    
            new BackgroundObject('../../img/5_background/layers/air.png', 719*3),
            new BackgroundObject('../../img/5_background/layers/3_third_layer/2.png', 719*3),
            new BackgroundObject('../../img/5_background/layers/2_second_layer/2.png', 719*3),
            new BackgroundObject('../../img/5_background/layers/1_first_layer/2.png', 719*3),
    
            new BackgroundObject('../../img/5_background/layers/air.png', 719*4),
            new BackgroundObject('../../img/5_background/layers/3_third_layer/1.png', 719*4),
            new BackgroundObject('../../img/5_background/layers/2_second_layer/1.png', 719*4),
            new BackgroundObject('../../img/5_background/layers/1_first_layer/1.png', 719*4),
    
            new BackgroundObject('../../img/5_background/layers/air.png', 719*5),
            new BackgroundObject('../../img/5_background/layers/3_third_layer/2.png', 719*5),
            new BackgroundObject('../../img/5_background/layers/2_second_layer/2.png', 719*5),
            new BackgroundObject('../../img/5_background/layers/1_first_layer/2.png', 719*5),
    
            new BackgroundObject('../../img/5_background/layers/air.png', 719*6),
            new BackgroundObject('../../img/5_background/layers/3_third_layer/1.png', 719*6),
            new BackgroundObject('../../img/5_background/layers/2_second_layer/1.png', 719*6),
            new BackgroundObject('../../img/5_background/layers/1_first_layer/1.png', 719*6)
        ],
    
        [   
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png'),
            new Coins('../../img/8_coin/coin_1.png')
        ],
    
        [
            new Bottles('../../img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/1_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'),
            new Bottles('../../img/6_salsa_bottle/1_salsa_bottle_on_ground.png')
        ]
    );
}




