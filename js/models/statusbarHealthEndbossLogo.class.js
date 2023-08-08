class StatusbarHealthEndbossLogo extends DrawableObject {

    images = [
        '../../img/7_statusbars/3_icons/icon_health_endboss.png'
    ];

    /**
     * Loads and positions the statusbar logo for the endbosses health on the canvas.
     */
    constructor() {
        super().loadImage('../../img/7_statusbars/3_icons/icon_health_endboss.png');  // Methoden vom übergeordneten Objekt werden so initialisiert!
        this.loadImages(this.images);
        //this.x = 4200;        
        this.x = 488;
        this.y = 48;
        this.height = 60;
        this.width = 60;
    }
}