// Define getter and setter of a particle field

//Class with 3 members
class Point{ 

    // Use underline prefix for convention field names
    constructor(private _x?:number,private _y?:number){  
    }

    draw() {
        console.log('X: '+this._x + ', Y: '+this._y);
    }

    get x() {   // get nameProperty+()   
        return this._x;
    }

    set x(value) { //set nameProperty+(value)
        if(value<0)
            throw new Error('value cannot be less than 0');
        this._x = value;
    }
}

//Instance
let point = new Point(1,2); 
//Manipulate the x property LIKE A FIELD(x field).
// Property: Looks like a field from outsied, but inside it's a method in class(getter/setter)
let x = point.x;
point.x = 10;
point.draw(); 

