//Typescript have: public, private and protected
// default are public

//Class with 3 members
class Point{ 
    // private x: number;   //Abstraction  //NO NEED
    // private y: number;

    constructor(private x?:number,private y?:number){ 
        // this.x = x;  //NO NEED
        // this.y = y;
    }

    draw() {
        console.log('X: '+this.x + ', Y: '+this.y);
    }

}

// Instance with constructor to simplify code
let point1 = new Point(1,2); 
point1.draw(); 

