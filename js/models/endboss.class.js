class Endboss extends MovableObject {
    height = 350;
    width = 300;
    y = 80;
    animateEndboss;
    nearEndboss = false;
    attackRangeEndboss = false;
    dieEndbossSound = new Audio('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/audio/dieCicken.mp3');
    
    imagesWalking = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/1_walk/G1.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/1_walk/G2.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/1_walk/G3.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/1_walk/G4.png'
    ];

    imagesAlert = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/2_alert/G5.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/2_alert/G6.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/2_alert/G7.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/2_alert/G8.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/2_alert/G9.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/2_alert/G10.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/2_alert/G11.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    imagesAttack = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/3_attack/G13.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/3_attack/G14.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/3_attack/G15.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/3_attack/G16.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/3_attack/G17.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/3_attack/G18.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/3_attack/G19.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/3_attack/G20.png'
    ];

    imagesHurt = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/4_hurt/G21.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/4_hurt/G22.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    imagesDead = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/5_dead/G24.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/5_dead/G25.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    offset =  {
        top: 30,
        left: 20,
        right: 0, 
        bottom: 20
    }

    firstContact = false;

     /**
     * This function loads the endboss and sets the coordinates for there placement on the canvas.
     */
    constructor() {
        super().loadImage('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesAlert);
        this.loadImages(this.imagesAttack);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
        this.x = 4200;
        this.speed = 50;
        this.animate();
        this.stopInterval();  
    }

    /**
     * This function assigns an interval to a variable and runs the animations function.
     */
    animate() {
        this.animateEndboss =
            setInterval(() => {
                this.animations()
            }, 500);
    }

    /**
     * This function plays the animations depending on different values.
     */
    animations() {
        if(this.isDeadEndboss()) {
            this.endbossDeadActions();
        } else if(this.isHurtEndboss()) {
            this.playAnimation(this.imagesHurt);
        } else if(this.nearEndboss && !this.isHurtEndboss()) {
            this.moveLeft();
            this.playAnimation(this.imagesAttack);
        } else {
            this.playAnimation(this.imagesAlert);
        }
    }

    /**
     * This function plays the dead sound and animation.
     */
    endbossDeadActions() {
        if(this.audioVolume == true){
            this.dieEndbossSound.play();            
        }
        this.playAnimation(this.imagesDead);
        setTimeout(() => {
            stopGame();
            document.getElementById('gameWonScreen').style.display = "flex";
        }, 1200);
    }

       stopInterval() {
        setInterval(() => {
            if(this.isDeadEndboss()) {
                clearInterval(this.animateEndboss);
            }
        }, 500);
    }

    /**
     * The function returns the value 0 for the endbosses energy.
     * @returns 
     */
    isDeadEndboss() {
        return this.energyEndboss == 0;
    }
}