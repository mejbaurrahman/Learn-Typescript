{
    //promise 

    type ToDo ={
        userId:number,
        id: number,
        title:string,
        completed: boolean,
    }

    const  getTodo = async() : Promise<ToDo>=>{
       const res= await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data= await res.json();
        console.log(data)
        return data
    }
    type Something = {something: string}
    //simulate
    const createPromise = (): Promise<Something>=>{
        return new Promise<Something>((resolve,reject) =>{
            const data: Something = {something: "Habajaba"}
            if(data){
                resolve(data)
            }else{
                reject("Faild to load data")
            }
        })
    }

    // calling carete promise function 
    const showData =async(): Promise<Something>=>{
        const data: Something= await createPromise()
        console.log(data)
        return data;
    }

    showData()
    getTodo()
}