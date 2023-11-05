{
    // generic constraints with keyof operator
    
    type Vehicle ={
        bike: string;
        car: string;
        ship: string;
    }
    
    type Owner = "bike"| "car"|"ship" ; // manually 
    
    type Owner2 = keyof Vehicle;

    const person1: Owner= "car" 

    const user ={
        name: "John",
        age:26,
        address: 'ctg'
    }

const getPropertyValue=<X, Y extends keyof X>(obj: X, key: Y)=>{
        return obj[key];
    }

    const result = getPropertyValue(user, 'name')
    


}