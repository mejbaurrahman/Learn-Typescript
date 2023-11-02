"use strict";
/*
Learning function
--------------------------------
Normal function
Arrow function
*/
// Normal Function
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(2, 4);
// Arrow function
const addArrow = (num1, num2) => {
    return num1 + num2;
};
// a function in object called method
//Object--> function --> method
const poorUser = {
    name: 'mejba',
    balance: 0,
    addBalance(balance) {
    }
};
