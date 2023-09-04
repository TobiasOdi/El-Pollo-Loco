class StatusbarHealthEndbossLogo extends DrawableObject {

    images = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/3_icons/icon_health_endboss.png'
    ];

    /**
     * This function loads and positions the statusbar logo of the endbosses health on the canvas.
     */
    constructor() {
        super().loadImage('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/3_icons/icon_health_endboss.png');
        this.loadImages(this.images);
        //this.x = 4200;        
        this.x = 488;
        this.y = 48;
        this.height = 60;
        this.width = 60;
    }
}