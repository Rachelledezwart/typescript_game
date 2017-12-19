/// <reference path="gameItem.ts" />

class Character extends GameItem {

    /**
    * Function to create the Character
    * @param {string} - name
    * @param {number} - xPosition
    * @param {number} - yPosition
    */
    constructor(name: string, colour: string, xPosition: number = 0, yPosition: number = 0) {
        super(name, colour, xPosition, yPosition);
    }

}  