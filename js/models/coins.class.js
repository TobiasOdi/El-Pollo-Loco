class Coins extends DrawableObject {
    x = 50;
    y = 50;
    height = 100;
    width = 100;
    images = [
        '../../img/8_coin/coin_1.png',
    ];

    constructor() {
        // => super() gilt nur für Methoden!!
        super().loadImage('../../img/8_coin/coin_1.png');
        this.loadImages(this.images);

        this.x = 300 + Math.random() * 2000;
        this.y = 120 + Math.random() * 230;
    }
}