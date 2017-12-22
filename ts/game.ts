class Game {
    protected canvas = <HTMLCanvasElement> document.querySelector('canvas');
    protected context: CanvasRenderingContext2D = this.canvas.getContext('2d');
    
    private _bouncer: Array<Projectile>;
    private _player: Character; 
    
    constructor(){
        //create some gameItems
        this._bouncer = new Array(); 
        this._player = new Character(10, "#912F40", 10, 10);

        //add keydown handler to the window object
        

        //draw is initial state
        this.setCanvasSize();

        //summon more circles the long the game goes ons
        this.draw();

        //start the game
        this.gameLoop();
    }

    public gameLoop = (): void => {
        requestAnimationFrame(this.gameLoop);
        
        this.update();
        
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

        this._bouncer.push(new Projectile(radius, '#FFF', xPos, yPos, xVel, yVel));
        
        setTimeout(() => {
            this.draw();
        }, 5000);
    }
    
    /**
    * Function to update the state of all living objects
    */
    public update(): void {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        this._bouncer.map((bouncer) => {
            bouncer.draw();
            bouncer.update();
        })
        
        this._player.draw();
        
    }

    public setCanvasSize(): void{
        this.canvas.width = document.body.clientWidth; //document.width is obsolete
        this.canvas.height = document.body.clientHeight; //document.height is obsolete
    }
    
}
