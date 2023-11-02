// Basic Data Types for TypeScript

/* 
Primitive Types
----------------------------------------------------------------
string
number
boolean
undefined
null
*/


let firstName: string = 'mejba'; //string
let roll: number = 13; //number

let isAdmin: boolean = true;//boolean

let x: undefined = undefined; //undefined

let y: null = null //null

let d; //any data type, should not be used

let n: number;

n= 123;

/*
 non primitive types
 ----------------------------------------------------------------
 Array
 tuple : array --> order--> types of values

*/
//array
let friends: string[] = ['mejba', 'sajib'];
let eligibleRolls: number[]= [1,2,3];

eligibleRolls.push(4);

//tuple
let coordinates: [number, number] = [1,5]

let ageName :[number, string] = [50, 'Mr X']

