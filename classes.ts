// Interface to define Shape(signature) NOT ALLOW IMPLEMENTATIONS
interface Point{
    x: number,
    y: number
}
//Standalone function1
let drawPoint = (point: Point) =>{
    //Code block...
}
//Standalone function2
let getDistance = (pointA:Point, pointB:Point)=>{
    //Code block...
}

//Call function1
drawPoint({
    x:1,
    y:2
})


// SOLUTION: Use Class
// Groups properties and methods HIGHLY RELATED -> Instead of interface use class:
class Points{ 
    x: number; //field 1
    y: number; //field 2
    draw() {
        // (method 1)
        console.log('X: '+this.x + ', Y: '+this.y);
    }

    getDistance(another:Point){
        /// Logic of function... (method 2)
    }
}

// Instances(object) of the Points class -> NEED TO INITIALIZE WITH new
let point1: Points = new Points(); //Instance(object) opt1
let point2 = new Points();  //Instance(object) opt2
point1.x = 1;
point1.y = 2;
point1.draw(); //Not more a standalone function

