//Class
class Point{ 
    x: number; 
    y: number;
    constructor(x?:number,y?:number){  // ? convert optional a parameter
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: '+this.x + ', Y: '+this.y);
    }

}

// Instance with constructor to simplify code
let point1 = new Point(1,2); 
point1.draw(); 

