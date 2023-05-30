let canvas;
let ctx;
let world;
let keyboard= new Keyboard();



// AUFGABEN
// 1. Start Screen
// 2. Musik + sounds
// 3. Coins einsammeln
// 4. Falschen einsammeln
// 5. Flaschen nur werfen, wenn sie vorhanden sind
// 6. Falschen kollision mit gegnern
// 7. Endgegner besiegen => Endgegner Healthbar
// 8. Game-Over Screen + Restart
// 9. Fullscreen Modus => Vollbildmodus mitder Methode requestfullscreen()
// 10. Anleitung/Legende welche Tasten was machen
// 11. Design => Hintergrundbild, Menu (Settings, Help, Start Game etc.)
// 12. Sound on/off button
// 13. Responsiveness => bei Smartphones muss ab einer gewissen Breite das Bild gedreht werden und die anderern Elemente neben dem Canvas ausgeblendet werden. 


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
   
    console.log('My character ist', world.character);
}

window.addEventListener('keydown', (event) => {
    if(event.keyCode == 37 || event.keyCode == 65) {
        keyboard.left = true;
    }

    if(event.keyCode == 39 || event.keyCode == 68) {
        keyboard.right = true;
    }

    if(event.keyCode == 38 || event.keyCode == 87) {
        keyboard.up = true;
    }

    if(event.keyCode == 40 || event.keyCode == 83) {
        keyboard.down = true;
    }

    if(event.keyCode == 32 || event.keyCode == 69) {
        keyboard.throw = true;
    }
});

window.addEventListener('keyup', (event) => {
    if(event.keyCode == 37 || event.keyCode == 65) {
        keyboard.left = false;
    }

    if(event.keyCode == 39 || event.keyCode == 68) {
        keyboard.right = false;
    }

    if(event.keyCode == 38 || event.keyCode == 87) {
        keyboard.up = false;
    }

    if(event.keyCode == 40 || event.keyCode == 83) {
        keyboard.down = false;
    }

    if(event.keyCode == 32 || event.keyCode == 69) {
        keyboard.throw = false;
    }
});