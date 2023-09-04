//=============================================================== VARIABLES ==================================================================
let canvas;
let ctx;
let world;
let keyboard = new Keyboard();
let movableObject = new MovableObject();
let fullSize = false;
let loading = false;
let audioVolume = false;

//=============================================================== START GAME ==================================================================
function showToolTip() {
    setTimeout(() => {
        let toolTip = document.getElementById('toolTip');
        toolTip.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { toolTip.className = toolTip.className.replace("show", ""); }, 5500);
    }, 2000);
}

//=============================================================== START GAME ==================================================================
/**
 * This function starts the game and hides the startscreen/startbutton.
 */
async function startGame() {
    document.getElementById('loader-wrapper').style.display = 'flex';
    document.getElementById('startGame').style.display = 'none';
    if(!loading) {
        loading = true;
        await init();
        loading = false;
        setTimeout(() => {
            document.getElementById('startScreen').style.backgroundImage = 'none';
            document.getElementById('startGameContainer').style.display = 'none';
            document.getElementById('loader-wrapper').style.display = 'none';
            document.getElementById('toolTip').style.visibility = "hidden";
        }, 1000);
    }
}

/**
 * This function initializes the game.
 */
async function init() {
    await startLevel();
    await setElements();
}

/**
 * This function creates a new world and sets the "lastKeyPress" variable
 */
async function setElements() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard, audioVolume);
    keyboard.lastKeyPress = new Date().getTime();
}

//=============================================================== GAME FEATURES ==================================================================
/**
 * This function plays and mutes the game sound.
 */
async function mute() {
    try {
        let soundIcon = document.getElementById('sound');
        if(soundIcon.src == 'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/icons/volume.svg') {
            soundIcon.src = 'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/icons/mute.svg';
            document.getElementById("gameSoundtrack").pause();
            audioVolume = false;
            world.audioVolume = false;
        } else {
            soundIcon.src = 'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/icons/volume.svg';
            document.getElementById("gameSoundtrack").play();
            audioVolume = true;
            world.audioVolume = true;
        }
    } catch(e) {
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
 * This function lets the game enter fullscreen.
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
 * The function lets the game exit fullscreen.
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitRequestFullscreen) {
        document.webkitRequestFullscreen();
    }
}

/**
 * This function shows the game controls
 */
function showControls() {
    document.getElementById('controls').style.display = "flex";
}

/**
 * This function hides the game controls
 */
function closeControls() {
    document.getElementById('controls').style.display = "none";
}

//=============================================================== CONTROLLS KEYBOARD ==================================================================
/**
 * This function sets a value when pressing a certain key down on your keyboard.
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
 * This function sets a value when releasing a certain key on your keyboard.
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

//=============================================================== CONTROLLS TOUCHDEVICE ==================================================================
/**
 * This function sets a value when touching a certain button on your mobile device (touchscreen).
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
        //characterJump.play();
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

//=============================================================== END GAME ==================================================================
/**
 * This function resetes all game parameters and starts the game anew.
 */
function restartGame(id) {
    world.ctx.clearRect(0, 0, canvas.width, canvas.height);
    init();
    document.getElementById(id).style.display = "none";
}

/**
 * This function resets all game parameters and brings you back to the main menue.
 */
function toMainMenue(id) {
    world.ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('startScreen').style.backgroundImage = "url('https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/9_intro_outro_screens/start/startscreen_1.png')";
    document.getElementById('startGameContainer').style.display = 'flex';
    document.getElementById('startGame').style.display = 'block';
    document.getElementById(id).style.display = "none";
}

/**
 * This function stops all intervals and mutes the soundtrack.
 */
function stopGame() {
    clearAllIntervals();
    document.getElementById("gameSoundtrack").pause();
    let soundIcon = document.getElementById('sound');
    soundIcon.src = 'https://tobias-odermatt.developerakademie.net/Projekte/El_Pollo_Loco/img/icons/mute.svg';
}

/**
 * This function clears all intervals.
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
};