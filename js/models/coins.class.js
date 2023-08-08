class Coins extends MovableObject {
    x = 50;
    y = 50;
    height = 100;
    width = 100;

    imagesCoin = [
        '../../img/8_coin/coin_1.png',
        '../../img/8_coin/coin_2.png'
    ];

    offset =  {
        top: 50,
        left: 50,
        right: 50, 
        bottom: 50
    }

    /**
     * Load coins and position on the canvas.
     */
    constructor() {
        // => super() gilt nur für Methoden!!
        super().loadImage('../../img/8_coin/coin_1.png');
        this.loadImages(this.imagesCoin);
        this.x = 300 + Math.random() * 4000;
        this.y = 200 + Math.random() * 160;
        this.animate();
    }

    /**
     * Animates the coins that can be collected
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.imagesCoin);
        }, 200);
    }
}