class Endboss extends MovableObject {
    height = 350;
    width = 300;
    y = 80;

// => Spawn function??

    imagesWalking = [
        '../../img/4_enemie_boss_chicken/2_alert/G5.png',
        '../../img/4_enemie_boss_chicken/2_alert/G6.png',
        '../../img/4_enemie_boss_chicken/2_alert/G7.png',
        '../../img/4_enemie_boss_chicken/2_alert/G8.png',
        '../../img/4_enemie_boss_chicken/2_alert/G9.png',
        '../../img/4_enemie_boss_chicken/2_alert/G10.png',
        '../../img/4_enemie_boss_chicken/2_alert/G11.png',
        '../../img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    firstContact = false;

    constructor() {
        super().loadImage('../../img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.imagesWalking);
        this.x = 2000;
        this.animate();    
    }

    animate() {


        setInterval(() => {

            this.playAnimation(this.imagesWalking);

        // Animation des Endbosses erst ausführen wenn Charakter eine gewisse Nähe zum Enboss hat 

//          let i = 0;

/*          if(i < 10) {
                this.playAnimation(this.imagesSpawning); // Bilder noch nicht vorhanden bzw. integriert
            } else {
                this.playAnimation(this.imagesWalking);
            }

            i++;

            if(world.character.x > 2800 && !firstContact) {
                i = 0;
                firstContact = true;
            }
 */

        }, 200)
    }
}