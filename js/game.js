let canvas;
let ctx;
let world;
let keyboard= new Keyboard();

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

    if(event.keyCode == 32) {
        keyboard.space = true;
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

    if(event.keyCode == 32) {
        keyboard.space = false;
    }
});