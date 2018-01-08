class Scoreboard {   
    protected canvas = <HTMLCanvasElement> document.querySelector('canvas');
    protected context: CanvasRenderingContext2D = this.canvas.getContext('2d');
    private _points: number;

    constructor(points: number = 0) {
        this._points = points;
    }

    public set setScore(points: number){
        this._points = points;
    }

    public get getScore(){
        return this._points;
    }

    public draw(): void{
        this.context.font = "30px 'Lato'";
        this.context.fillStyle = "#fff";
        this.context.fillText("Score: " + this._points, window.innerWidth - 175 , 50);
    }
}
