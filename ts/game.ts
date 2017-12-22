class Game {
    private canvas = <HTMLCanvasElement> document.querySelector('canvas');
    private context: CanvasRenderingContext2D = this.canvas.getContext('2d');
    
    private _projectiles: Array<Projectile>;
    private _player: Character; 

    private keys: Array<boolean> = [];
    
    constructor(){
        let playerRadius: number = 20;

        //create some gameItems
        this._projectiles = new Array(); 
        this._player = new Character(playerRadius, "#912F40", window.innerWidth / 2 - playerRadius / 2, window.innerHeight / 2 - playerRadius / 2);

        //add keydown handler to the window object
        window.addEventListener('keydown', (e) => {
            this.keys[e.keyCode] = true;
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.keyCode] = false;
        });        

        //draw is initial state
        this.setCanvasSize();

        //summon more circles the long the game goes ons
        this.draw();

        //start the game
        this.gameLoop();
    }

    public gameLoop = (): void => {
        requestAnimationFrame(this.gameLoop);

        let movementSpeed = 10;

        if (this.keys[65] && this._player.xPosition - this._player.radius > 0) {
            this._player.SetPositionX = this._player.xPosition - movementSpeed;
        }

        if (this.keys[68] && this._player.xPosition + this._player.radius < innerWidth) {
            this._player.SetPositionX = this._player.xPosition + movementSpeed;
        }

        if (this.keys[83] && this._player.yPosition + this._player.radius < innerHeight) {
            this._player.SetPositionY = this._player.yPosition + movementSpeed;
        }

        if (this.keys[87] && this._player.yPosition - this._player.radius > 0) {
            this._player.SetPositionY = this._player.yPosition - movementSpeed;
        }
        
        this.update();
        
    }

    public setCanvasSize(): void{
        this.canvas.width = document.body.clientWidth; //document.width is obsolete
        this.canvas.height = document.body.clientHeight; //document.height is obsolete
    }
    
    /**
    * Function to draw the initial state of al living objects
    */
    public draw(): void {
        let radius = 25; 

        let xPos = Math.random() * (innerWidth - radius * 2) + radius;
        let yPos = Math.random() * (innerHeight - radius * 2) + radius;

        let xVel = (Math.random() - 0.5) * 10;
        let yVel = (Math.random() - 0.5) * 10;

        if(this.distance(xPos, yPos) < radius + this._player.radius + 30){
            xPos = Math.random() * (innerWidth - radius * 2) + radius;
            yPos = Math.random() * (innerHeight - radius * 2) + radius;
        }

        this._projectiles.push(new Projectile(radius, '#FFF', xPos, yPos, xVel, yVel));
        
        setTimeout(() => {
            this.draw();
        }, 5000);
    }
    
    /**
    * Function to update the state of all living objects
    */
    public update(): void {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        this._projectiles.map((projectile) => {
            projectile.draw();
            projectile.update();
        })
        
        this._player.draw();
    }
    
    public distance(xPos: number, yPos: number){
        let xDistance = xPos - this._player.xPosition;
        let yDistance = yPos - this._player.yPosition;

        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }
}
