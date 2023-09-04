class Bottles extends DrawableObject {
    x = 50;
    y = 50;
    height = 80;
    width = 60;
    
    offset =  {
        top: 20,
        left: 20,
        right: 20, 
        bottom: 10
    }

    /**
     * This function loads the collectable bottles and sets the coordinates for there placement on the canvas
     * @param {string} imagePath - path to the correct image
     */
    constructor() {
        super().loadImage('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/6_salsa_bottle/2_salsa_bottle_on_ground.png');
        this.x = 300 + Math.random() * 4000;
        this.y = 335;
    }
}