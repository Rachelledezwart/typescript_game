class cCircle implements iShape {
    public x: number = 0;
    public y: number = 0;
    public radius: number = 1;
    public lineWidth: number = 25;
    public color: string = "red";
    constructor(x: number, y: number, radius: number, color: string = "red", line_width: number = 2)
    {
       this.x = x;
       this.y = y;
       this.radius = radius;
       this.color = color;
       this.lineWidth = line_width;
    }
    public draw = (): void => {
        let canvas = <HTMLCanvasElement> document.getElementById('playingField');
        let context: CanvasRenderingContext2D = canvas.getContext('2d');

        context.save();
        context.beginPath();
        context.strokeStyle = this.color;
        context.lineWidth = this.lineWidth;
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.stroke();
        context.restore();
    }
 }