class StatusbarHealth extends DrawableObject {

    images = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];

    percentage = 100;

    /**
     * This function loads and positions the statusbar of the characters health on the canvas.
     */
    constructor() {
        super();  // Methoden vom übergeordneten Objekt werden so initialisiert!
        this.loadImages(this.images);
        this.x = 20;
        this.y = 0;
        this.height = 60;
        this.width = 200;
        this.setPercentageHealth(100);
    }
}