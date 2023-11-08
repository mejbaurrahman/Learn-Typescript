{
    // type guards
    //typeof--> type guard

    type Alphaneumeric = string | number;
    const add= (param1: Alphaneumeric, param2: Alphaneumeric):Alphaneumeric =>{
        
        if(typeof param1 === 'number' && typeof param2 === 'number'){
            return param1+ param2
        }
        return param1.toString()+ param2.toString()
    }
    // 

    const result = add(3,4);
    console.log(result)

    //in guard

    type NormalUser ={
        name:string
    }

    type AdminUser ={
        name:string;
        role:string;
    }

    const getUser =(user:NormalUser|AdminUser)=>{
        if('role' in user){
            
            console.log(`My Name is ${user.name} and my role is ${user.role}`)
        }else{
            console.log(`My Name is ${user.name}`)
        }
    }

    const normalUser : NormalUser = {
        name:"Normal Bhai"
    }

    const adminUser: AdminUser = {
        name:"Admin",
        role:"Administrator"
    }

    getUser(normalUser);
    // 
}