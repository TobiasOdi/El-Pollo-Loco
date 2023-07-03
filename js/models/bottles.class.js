class Bottles extends DrawableObject {
    x = 50;
    y = 50;
    height = 80;
    width = 60;
    images = [
        '../../img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    offset =  {
        top: 0,
        left: 0,
        right: 0, 
        bottom: 0
    }

    constructor(imagePath) {
         // => super() gilt nur für Methoden!!
        super().loadImage(imagePath);
        this.x = 300 + Math.random() * 2000;
        this.y = 335;
    }




/*     constructor() {
        // => super() gilt nur für Methoden!!
        super().loadImage('../../img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.images);

        this.x = 300 + Math.random() * 2000;
        this.y = 335;
    } */
}