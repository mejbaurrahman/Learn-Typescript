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

const isAuthenticated= null;

const result= isAuthenticated ?? 'Gust'

console.log(result)
}