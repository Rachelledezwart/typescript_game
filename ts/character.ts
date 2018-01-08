/// <reference path="gameItem.ts" />

class Character extends GameItem {
    private _health: number; 
    
    /**
    * Function to create the Character
    * @param {string} - name
    * @param {number} - xPosition
    * @param {number} - yPosition
    */
    constructor(radius:number = 10, colour: string, xPosition: number = 0, yPosition: number = 0) {
        super(radius, colour, xPosition, yPosition);
        this._health = 3;
    }

    public set SetPositionX(xPos: number) {
        this._xPos = xPos;
    }

    public set SetPositionY(yPos: number) {
        this._yPos = yPos;
    }

    public set SetHealth(health: number) {
        this._health = health;
    }

    public get health() {
        return this._health;
    }
        
    /**
    * Function to update the state of the GameItem in the DOM
    */    
    public draw(): void {
        this.context.beginPath();
        this.context.arc(this._xPos, this._yPos, this._radius, 0, Math.PI * 2, false);
        this.context.strokeStyle = this._colour;
        this.context.fillStyle = this._colour;
        this.context.stroke(); 
        this.context.fill();
    }

    public drawHealth(): void {
        this.context.font = "30px 'Lato'";
        this.context.fillStyle = "#fff";
        this.context.fillText("Lives: " + this._health, 25, 50);
    }
}  