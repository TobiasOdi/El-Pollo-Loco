class StatusbarBottles extends DrawableObject {

    images = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'
    ];

    percentage = 0;

    /**
     * This function loads and positions the statusbar for the collectable bottles on the canvas.
     */
    constructor() {
        super();  // Methoden vom übergeordneten Objekt werden so initialisiert!
        this.loadImages(this.images);
        this.x = 20;
        this.y = 80;
        this.height = 60;
        this.width = 200;
        this.setPercentageCollectables(0);
    }
}

