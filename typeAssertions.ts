let message = 'abc'; //Type if string
let endsWithA = message.endsWith('a'); //Allow IntelliSense


let message2;  //Defatul type is 'any'
message2 = 'abc' //Lose IntelliSense (Code completion)
let endsWithB = message2 // message2. Not show method endsWitch

let message3;  //Defatul type is 'any'
message3 = 'abc' //Lose IntelliSense (Code completion) -> SOL: Type Assertion(directly tell tsc about type)
let endsWithC = (<string>message3).endsWith('c')  // -> Type Assertion opt1(more used)
let alternativeWay = (message3 as string).endsWith('c') // -> Type Assertion opt2
