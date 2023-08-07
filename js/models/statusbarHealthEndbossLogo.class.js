
class StatusbarHealthEndbossLogo extends DrawableObject {

    images = [
        '../../img/7_statusbars/3_icons/icon_health_endboss.png'
    ];

    /**
     * Loads the statusbar and positions it on the canvas.
     */
    constructor() {
        super().loadImage('../../img/7_statusbars/3_icons/icon_health_endboss.png');  // Methoden vom übergeordneten Objekt werden so initialisiert!
        this.loadImages(this.images);
        this.x = 500;
        this.y = 60;
        this.height = 60;
        this.width = 60;
    }
}