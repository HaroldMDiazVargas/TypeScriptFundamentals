//Typescript have: public, private and protected
// default are public

//Class with 3 members
class Point{ 
    private x: number;   //Abstraction
    private y: number;

    constructor(x?:number,y?:number){ 
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

