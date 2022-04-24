// Data types in TypeSript
let z; //Avoid this
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false]; //Avoid this

// enum Type:

// Plain Javascript 
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// Using enum in TypeScript to put in container
enum Color {Red = 0, Green = 1, Blue = 2}; //Better put explicit values(0,1,2...)
let background = Color.Red;
let color = Color.Blue;

