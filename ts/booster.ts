/// <reference path="gameItem.ts" />
class booster extends GameItem{
    constructor(radius:number, colour: string, xPosition: number = 0, yPosition: number = 0) {
        super(radius, colour, xPosition, yPosition);
    }
    
    /**
    * Function to draw the initial state of the gameItem
    * @param {HTMLElement} - container
    */
    public draw(): void {
        
    }
}