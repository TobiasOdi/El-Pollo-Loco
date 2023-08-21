class Endboss extends MovableObject {
    height = 350;
    width = 300;
    y = 80;
    animateEndboss;
    nearEndboss = false;
    attackRangeEndboss = false;
    dieEndbossSound = new Audio('../audio/dieCicken.mp3');

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
        top: 30,
        left: 20,
        right: 0, 
        bottom: 20
    }

    firstContact = false;

     /**
     * Loads endboss and the different animations and position on the canvas.
     */
    constructor() {
        super().loadImage('../../img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesAlert);
        this.loadImages(this.imagesAttack);
        this.loadImages(this.imagesHurt);
        this.loadImages(this.imagesDead);
        this.x = 4200;
        this.speed = 50;
        this.animate();  
        //this.stopInterval();  
    }

    /**
     * Play animations depending on different action.
     */
    animate() {
        this.animateEndboss =
            setInterval(() => {
                this.animations()
            }, 500);

    /*     this.attackEndboss = 
            setInterval(() => {
                this.attackAnimation()
            }, 500);  */
    }

    stopInterval() {
        setInterval(() => {
            if(this.isDeadEndboss()) {
                clearInterval(this.animateEndboss, this.attackEndboss);
            }
        }, 500);
    }

    animations() {
        if(this.isDeadEndboss()) {
            this.dieEndbossSound.play();            
            this.playAnimation(this.imagesDead);
            stopGame();
            setTimeout(() => {
                document.getElementById('gameWonScreen').style.display = "flex";
            }, 1000);
        } else if(this.isHurtEndboss()) {
            this.playAnimation(this.imagesHurt);
        } else if(this.nearEndboss && !this.isHurtEndboss()) {
            this.moveLeft();
            this.playAnimation(this.imagesWalking);
        } else {
            this.playAnimation(this.imagesAlert);
        }
    }

   /*  attackAnimation() {
        if(this.attackEndboss) {
            this.playAnimation(this.imagesAttack);
        } 
    } */

    /**
     * The function returns the value 0 for the endbosses energy
     * @returns 
     */
    isDeadEndboss() {
        return this.energyEndboss == 0;
    }

}