/*
Learning function
--------------------------------
Normal function
Arrow function
*/

// Normal Function

function add(num1: number, num2: number = 10) : number {
    return num1 + num2;
}

add(2, 4);

// Arrow function

const addArrow = (num1: number, num2: number): number=>{
    return num1 + num2;
}

// a function in object called method
//Object--> function --> method

//অবজেক্টের মধ্যে ফাংশন থাকলে সেটার নাম মেথড

const poorUser ={
    name: 'mejba',
    balance: 0,
    addBalance(balance: number): string{
        return `My new blance is ${balance+this.balance}`;
    }
}

const arr: number[] = [1, 4, 10]
const newArr: number[] = arr.map((e: number) : number => e*e)