class GameItem {
    protected canvas = <HTMLCanvasElement> document.querySelector('canvas');
    protected context: CanvasRenderingContext2D = this.canvas.getContext('2d');

    //attr
    protected _colour: string;
    protected _xPos: number;
    protected _yPos: number;
    
    /**
    * Function to create the GameItem
    * @param {string} - name
    * @param {number} - xPosition
    * @param {number} - yPosition
    */
    constructor(colour: string = '#5E0028', xPosition: number = 0, yPosition: number = 0) {
        this._colour = colour;
        this._xPos = xPosition;
        this._yPos = yPosition;
    }

    public get xPosition(){
        return this._xPos;
    }

    public get yPosition(){
        return this._yPos;
    }
}