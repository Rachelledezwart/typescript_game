/// <reference path="gameItem.ts" />

class Projectile extends GameItem {
    private _radius: number;
    private _xVel: number;
    private _yVel: number;

    /**
    * Function to create the Character
    * @param {string} - name
    * @param {number} - xPosition
    * @param {number} - yPosition
    */
    constructor(radius:number = 10, colour: string, xPosition: number = 0, yPosition: number = 0, xVelocity: number, yVelocity: number) {
        super(colour, xPosition, yPosition);
        this._radius = radius;
        this._xVel = xVelocity; 
        this._yVel = yVelocity;
    }
    
    /**
    * Function to draw the initial state of the projectile
    * @param {HTMLElement} - container
    */
    public draw(): void {
        this.context.beginPath();
        this.context.arc(this._xPos, this._yPos, this._radius, 0, Math.PI * 2, false);
        this.context.strokeStyle = this._colour;
        this.context.stroke();
    }

    public get radius(){
        return this._radius;
    }

    /**
    * Function to update the state of the projectile in the DOM
    */    
    public update(): void {
        if(this._xPos + this._radius > innerWidth || this._xPos - this._radius < 0){
            this._xVel = -this._xVel;
        }

        if(this._yPos + this._radius > innerHeight || this._yPos - this._radius < 0){
            this._yVel = -this._yVel;
        }

        this._xPos += this._xVel;
        this._yPos += this._yVel;
        
    }

    public bounce(): void{
        this._xVel = -this._xVel;
        this._yVel = -this._yVel;
    }
}  