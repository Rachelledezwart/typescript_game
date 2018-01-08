/// <reference path="gameItem.ts" />
class Booster extends GameItem{
    private _name: string; 

    constructor(name: string, radius:number, colour: string, xPosition: number = 0, yPosition: number = 0) {
        super(radius, colour, xPosition, yPosition);
        this._name = name;
    }

    public get name(){
        return this._name;
    }
    
    /**
    * Function to draw the initial state of the gameItem
    * @param {HTMLElement} - container
    */
    public draw(): void {        
        this.context.beginPath();
        this.context.arc(this._xPos, this._yPos, this._radius, 0, Math.PI * 2, false);
        this.context.strokeStyle = this._colour;
        this.context.fillStyle = this._colour;
        this.context.stroke(); 
        this.context.fill();
    }

}