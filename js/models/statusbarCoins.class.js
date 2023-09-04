class StatusbarCoins extends DrawableObject {

    images = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png'
    ];

    percentage = 0;

    /**
     * This function loads and positions the statusbar for the collectable coins on the canvas.
     */
    constructor() {
        super();  // Methoden vom übergeordneten Objekt werden so initialisiert!
        this.loadImages(this.images);
        this.x = 20;
        this.y = 40;
        this.height = 60;
        this.width = 200;
        this.setPercentageCollectables(0);
    }
}