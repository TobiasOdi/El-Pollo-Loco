class Chicken extends MovableObject {
    y = 360;
    height = 60;
    width = 60;
    chickenDieSound = new Audio('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/audio/dieChickenSmall2.mp3');
    animationInterval;
    
    imagesWalking = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];

    imagesDead = [
        'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];

    offset =  {
        top: 5,
        left: 0,
        right: 0, 
        bottom: 5
    };

    /**
     * This function loads the "chicken" enemy and sets the coordinates for there placement on the canvas
     */
    constructor() {
        super().loadImage('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesDead);
        this.x = 400 + Math.random() * 4000;
        this.speed = 4 + Math.random() * 1.5;
        this.audioVolume;  
        this.animate();
        this.checkDeadChicken();  
    }

    /**
     * This function assigns an interval to a variable and runs the animations function
     */
    animate() {
        this.animationInterval = 
        setInterval(() => {
            this.animations()
        }, 100);
    }

    /**
     * This function plays the animations depending on different values
     */
    animations() {
        if(this.speed == 0) {
            this.playAnimation(this.imagesDead);
            if(this.audioVolume == true) {
                this.chickenDieSound.play();
            }
            setTimeout(() => {
                this.x = 0;
                this.y = -100;
                }, 1500);
        } else {
            this.moveLeft();
            this.playAnimation(this.imagesWalking);
        }
    }

    /**
     * This function stopps the "animationInterval" interval when the chicken is dead.
     */
    checkDeadChicken() {
        setInterval(() => {
            if(this.speed == 0) {
                clearInterval(this.animationInterval);
            } 
        }, 100);
    }
}