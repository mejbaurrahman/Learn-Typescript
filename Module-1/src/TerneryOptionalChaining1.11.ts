{
 // ternery || optional chaining || nullish coalescing operator

const age: number = 15;
if(age >= 18){
    console.log("adult")

}else{
    console.log("not adult")
}


const isAdult= age >= 18 ? true : false;

// nullish coalescing operator
// null and undefined -> decision making

const isAuthenticated= null;

const result= isAuthenticated ?? 'Gust'

console.log(result)

// optional chaining
type User ={
    name: string;
    address: {
        city: string;
        road: string;
        presentAddress: string;
        parmanentAddress: string;
    }
}

const user: User = {
    name: 'John',
    address:{
        city: 'dhk',
        road: 'A42/3',
        presentAddress:'Magura',
        parmanentAddress: 'Bangladesh'
    }


}
}
