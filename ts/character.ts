/// <reference path="gameItem.ts" />

class Character extends GameItem {

    /**
    * Function to create the Character
    * @param {string} - name
    * @param {number} - xPosition
    * @param {number} - yPosition
    */
    constructor(radius:number, colour: string, xPosition: number = 0, yPosition: number = 0, xVelocity: number, yVelocity: number) {
        super(radius, colour, xPosition, yPosition, xVelocity, yVelocity);
    }

    

}  