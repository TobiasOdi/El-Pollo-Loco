class StatusbarHealthEndboss extends DrawableObject {

    images = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/orange/60.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/orange/80.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/orange/100.png',
    ];

    percentage = 100;

    /**
     * This function loads and positions the statusbar of the endbosses health on the canvas.
     */
    constructor() {
        super().loadImage('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/orange/0.png');
        this.loadImages(this.images);
        //this.x = 4200;        
        this.x = 500;
        this.y = 40;
        this.height = 60;
        this.width = 200;
        this.setPercentageHealth(100);
    }
}