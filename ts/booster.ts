/// <reference path="gameItem.ts" />
class booster extends GameItem{
    constructor(radius:number, colour: string, xPosition: number = 0, yPosition: number = 0) {
        super(radius, colour, xPosition, yPosition);
    }
}