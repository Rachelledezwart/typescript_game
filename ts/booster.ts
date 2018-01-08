/// <reference path="gameItem.ts" />
class Booster extends GameItem{
    private _name: string; 
    private _radius: number; 
    private _points: number;
    private _currentSpawn: number;
    private _maxSpawn: number; 

    constructor(name: string, radius:number, colour: string, xPosition: number = 0, yPosition: number = 0) {
        super(colour, xPosition, yPosition);
        this._name = name;
        this._radius = radius; 
    }

    public set currentSpawn(current){
        this._currentSpawn = current; 
    }

    public get name(){
        return this._name;
    }

    public get points(){
        return this._points;
    }
    
    public get radius() {
        return this._radius;
    }
    
    public get currentSpawn(){
        return this._currentSpawn;
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