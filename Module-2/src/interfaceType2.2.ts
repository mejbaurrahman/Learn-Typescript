{
     // interface

    //type alias  type TypeName = 

    //type alias vs interface
    //----------------------------------------------------------------
    // type alias a primitive type use kora possbile kintu interface e possible na 

    //type example 

    type User1 = {
        age: number;
        name: string;
    }
    type UserWithRoll = User1 & {role: string}

    const userWithRoll : UserWithRoll = {
        age: 1,
        name: "John",
        role: "2"
    }

    //interface example
    interface User2 {
        name: string;
        age: number;
    }

   

    interface UserWithRoll2 extends User2{
        role: string;
    }

    const user1 : UserWithRoll2 ={
        age: 1,
        name: "John",
        role: "2"
    }


 // you can extends type alias also
 interface UserWithRoll3 extends User1 {
    // here User1 is a type alias not interface
    role: string;
 }

 const user3 : UserWithRoll3={
    age: 3,
    name: "John",
    role: "3"


 }

 //js-->Object, array=>object functions-> Object 

 type Roll = number[];

 const rollNumber :Roll  = [1,2,3];
 
 interface Roll1 { // array use in interface
    [index: number]: number;
 }

 const rollNumber2: Roll1 = [1,2,3];


 type Add = (num1: number, num2: number) => number // function type declare

 const add : Add =(num1, num2)=> num1+num2; // Use that function type alias


 interface Add2 {
    (num1: number, num2: number) : number;
 }

 const add2 : Add2 = (num1: number, num2: number) => num1+num2; // Use funtion type interface
}