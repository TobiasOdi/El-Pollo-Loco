let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
let fullSize = false;
//let intervalIds = [];

// AUFGABEN
// 1. Sounds suchen 
//      - Springen
//      - Flasche werfen
//      - impact, zerbrechen, spritzer
//      - Geräusche Hühner, kleiner Hühner, Boss
// 2. Falschen kollision mit Gegnern > kleine und Endboss
// 4. Endgegner besiegen => Endgegner Healthbar
// 5. Responsiveness => bei Smartphones muss ab einer gewissen Breite das Bild gedreht werden und die anderern Elemente neben dem Canvas ausgeblendet werden. 
// 6. Code bereinigen:
//      - Funktionen kürzen und übersichtlich gestalten
//      - Funktionen mit return erstellen bei welchen man genau weiss was diese machen. z.B. in einer if abfrage
//          - z.B. canMoveRight() => als Frage formulieren

/**
 * This function initializes the game.
 */
async function init() {
    await startLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    keyboard.lastKeyPress = new Date().getTime();
}

/**
 * It plays and mutes the game sound.
 */
function mute() {
    let soundIcon = document.getElementById('sound');

    if(soundIcon.src == 'http://127.0.0.1:5500/img/icons/volume.svg') {
        soundIcon.src = 'http://127.0.0.1:5500/img/icons/mute.svg';
        document.getElementById("gameSoundtrack").pause();

    } else {
        soundIcon.src = 'http://127.0.0.1:5500/img/icons/volume.svg';
        document.getElementById("gameSoundtrack").play();
    }
}

/**
 * This function starts and ends the fullscreen.
 */
function fullScreen() {
    let gameContainer = document.getElementById('gameContainer');
    let canvas = document.getElementById('canvas');

    if(fullSize == false) {
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        enterFullscreen(gameContainer);
        fullSize = true;
    } else {
        canvas.style.width = '720px';
        canvas.style.height = '480px';
        exitFullscreen();
        fullSize = false;
    }
}

/**
 * The game enters fullscreen.
 * @param {element} gameContainer - Element/Container that enters fullscreen
 */
function enterFullscreen(gameContainer) {
    if(document.requestFullscreen) {
        gameContainer.requestFullscreen();
    } else if (gameContainer.msRequestFullscreen) {       // for IE11
        gameContainer.msRequestFullscreen();
    } else if (gameContainer.webkitRequestFullscreen) {   //  IOS Safari
        gameContainer.webkitRequestFullscreen();
    }
}

/**
 * The game exits fullscreen.
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitRequestFullscreen) {
        document.webkitRequestFullscreen();
    }
}

/**
 * This function initializes the game and hides the startscreen.
 */
async function startGame() {
    document.getElementById('startScreen').style.backgroundImage = 'none';
    document.getElementById('startGame').style.display = 'none';
    await init();
}

/**
 * Sets a value when pressing a certain key on your keyboard.
 * => Controlling your character
 */
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

/**
 * Sets a value when releasing a certain key on your keyboard.
 * => Controlling your character
 */
window.addEventListener('keyup', (event) => {
    if(event.keyCode == 37 || event.keyCode == 65) {
        keyboard.left = false;
        keyboard.lastKeyPress = new Date().getTime();
    }

    if(event.keyCode == 39 || event.keyCode == 68) {
        keyboard.right = false;
        keyboard.lastKeyPress = new Date().getTime();
    }

    if(event.keyCode == 38 || event.keyCode == 87) {
        keyboard.up = false;
        keyboard.lastKeyPress = new Date().getTime();
    }

    if(event.keyCode == 40 || event.keyCode == 83) {
        keyboard.down = false;
        keyboard.lastKeyPress = new Date().getTime();
    }

    if(event.keyCode == 32 || event.keyCode == 69) {
        keyboard.throw = false;
        keyboard.lastKeyPress = new Date().getTime();
    }
});

/**
 * Sets a value when touching a certain key on your keyboard.
 * => Controlling your characte with a touch device
 */
function bindBtsPressEvents() {
    let walkLeft = document.getElementById('walkLeft');
    let walkRight = document.getElementById('walkRight');
    let jump = document.getElementById('jump');
    let throwBottle = document.getElementById('throwBottle');

    walkLeft.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.left = true;
    });

    walkLeft.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.left = false;
        keyboard.lastKeyPress = new Date().getTime();
    });

    walkRight.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.right = true;
    });

    walkRight.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.right = false;
        keyboard.lastKeyPress = new Date().getTime();
    });

    jump.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.up = true;
    });

    jump.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.up = false;
        keyboard.lastKeyPress = new Date().getTime();
    });

    throwBottle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.throw = true;
    });

    throwBottle.addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.throw = false;
        keyboard.lastKeyPress = new Date().getTime();
    });
}

/**
 * Shows the controls, which key need to be pressed for a certain action.
 */
function showControls() {
    document.getElementById('controls').style.display = "flex";
}

/**
 * Hides the controls.
 */
function closeControls() {
    document.getElementById('controls').style.display = "none";
}

/**
 * Resetes all game parameters an starts the game anew.
 */
function restartGame() {
    world.ctx.clearRect(0, 0, canvas.width, canvas.height);
    init();
    document.getElementById('gameOverScreen').style.display = "none";
}

/**
 * Resets all game parameters and brings you back to the main menue.
 */
function toMainMenue() {
    world.ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('gameOverScreen').style.display = "none";
    document.getElementById('startScreen').style.backgroundImage = "url('./img/9_intro_outro_screens/start/startscreen_1.png')";
    document.getElementById('startGame').style.display = 'flex';
}

function stopGame() {
    clearAllIntervals();
    document.getElementById('gameSoundtrack').muted = true;
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
};

/**
 * A function to store every interval in an array in order to stop them if needed.
 * @param {function} fn - specific function
 * @param {number} time - Interval time, how often the function is beeing run
 */

/* function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
} */

