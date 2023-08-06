class Endboss extends MovableObject {
    height = 350;
    width = 300;
    y = 80;

// => Spawn function??

    imagesWalking = [
        '../../img/4_enemie_boss_chicken/1_walk/G1.png',
        '../../img/4_enemie_boss_chicken/1_walk/G2.png',
        '../../img/4_enemie_boss_chicken/1_walk/G3.png',
        '../../img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    imagesAlert = [
        '../../img/4_enemie_boss_chicken/2_alert/G5.png',
        '../../img/4_enemie_boss_chicken/2_alert/G6.png',
        '../../img/4_enemie_boss_chicken/2_alert/G7.png',
        '../../img/4_enemie_boss_chicken/2_alert/G8.png',
        '../../img/4_enemie_boss_chicken/2_alert/G9.png',
        '../../img/4_enemie_boss_chicken/2_alert/G10.png',
        '../../img/4_enemie_boss_chicken/2_alert/G11.png',
        '../../img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    imagesAttack = [
        '../../img/4_enemie_boss_chicken/3_attack/G13.png',
        '../../img/4_enemie_boss_chicken/3_attack/G14.png',
        '../../img/4_enemie_boss_chicken/3_attack/G15.png',
        '../../img/4_enemie_boss_chicken/3_attack/G16.png',
        '../../img/4_enemie_boss_chicken/3_attack/G17.png',
        '../../img/4_enemie_boss_chicken/3_attack/G18.png',
        '../../img/4_enemie_boss_chicken/3_attack/G19.png',
        '../../img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    imagesHurt = [
        '../../img/4_enemie_boss_chicken/4_hurt/G21.png',
        '../../img/4_enemie_boss_chicken/4_hurt/G22.png',
        '../../img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    imagesDead = [
        '../../img/4_enemie_boss_chicken/5_dead/G24.png',
        '../../img/4_enemie_boss_chicken/5_dead/G25.png',
        '../../img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    offset =  {
        top: 0,
        left: 0,
        right: 0, 
        bottom: 0
    }

    firstContact = false;

     /**
     * Load endboss an the different animations and position on the canvas.
     */
    constructor() {
        super().loadImage('../../img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesAlert);
        this.loadImages(this.imagesAttack);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
        this.x = 4200;
        this.animate();    
    }

    /**
     * Play animations depending on different action.
     */
    animate() {
        setInterval(() => {
            if(this.isDeadEndboss()) {
                debugger;
                this.playAnimation(this.imagesDead);
                stopGame();
                setTimeout(() => {
                    document.getElementById('gameOverScreen').style.display = "flex";
                }, 1500);
            } else if(this.isHurtEndboss()) {
                this.playAnimation(this.imagesHurt);
            } else {
                this.playAnimation(this.imagesAlert);
            }
        }, 200)
    }
}