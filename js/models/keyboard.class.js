class Keyboard {
    left = false;  // code 65, 37
    right = false; // code 68, 39
    up = false; // code 87, 38
    down = false; // code 83, 40
    throw = false; // code 32, 69
    lastKeyPress;


/*      constructor() {
        this.bindKeyPressEvents();
        this.bindBtsPressEvents();
    } */

/*     bindKeyPressEvents() {
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
    }
 */
/*     bindBtsPressEvents() {
        document.getElementById('walkLeft').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.left = true;
        });
    
        document.getElementById('walkLeft').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.left = false;
        });
    
        document.getElementById('walkRight').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.right = true;
        });
    
        document.getElementById('walkRight').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.right = false;
        });
    
        document.getElementById('jump').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.up = true;
        });
    
        document.getElementById('jump').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.up = false;
        });
    
        document.getElementById('throwBottle').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.throw = true;
        });
    
        document.getElementById('throwBottle').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.throw = false;
        });
    }
 */} 