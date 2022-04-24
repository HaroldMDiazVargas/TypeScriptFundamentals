// Pass point object with inline annotation
let drawPoint = (point:{ x:number, y:number }) =>{
    //code of function here...
}

// Pass object to avoid pass so many properties to a function(ENCAPSULATE)
drawPoint({
    x:1,
    y:2
})


// Better approach instead of inline annotation
// is to use Interfaces with pascal naming convention.
// Define the shape of the object
interface Point{
    x: number,
    y: number
}


let drawPoint2 = (point: Point) =>{
    //
}
