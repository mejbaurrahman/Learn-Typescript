{
// type alias 

type Student ={ // ekoi types gula bar bar declare na kore evave ekta alias type kore neowa valo
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
}
const student1 : Student = {
    name: "Student",
    age: 45, 
    gender: "Male",
    contactNo: "017000000",
    address: "Bangladesh"
}

const student2 :Student={
    name: "Mir",
    age: 40, 
    gender: "Male",
    address: "Dhaka"
}

// another example

type UserName = string
type IsAdmin = boolean;

const isAdmin: IsAdmin = true
const userName : UserName= "Mir";


// function type aliases 

type Add = (num1: number, num2: number)=> number
// const add=(num1: number, num2: number): number=>{
//     return num1 + num2
// }
const add: Add =(num1, num2)=>{
    return num1 + num2
}

}