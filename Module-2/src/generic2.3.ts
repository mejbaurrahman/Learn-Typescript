{
    //

    //generic type declaration

    //type GenericArray = Array<string>
    type GenericArray<T> = Array<T>

    // const rollNumbers: number[] = [1, 2, 3] // both are same
    const rollNumbers: Array<number> = [1, 2, 3]
    // const mentors: string[] = ["a", "b", "c" ] 
    const mentors: GenericArray<string> = ["a", "b", "c" ] 
    // const boolArray: boolean[] = [true, false,true]
    const boolArray: Array<boolean> = [true, false,true]

 // generic use kore array of object
    const user: GenericArray<{name:string, age: number}> =[
    {
        name: "user",
        age:50
    },
    {
        name: "user2",
        age:51

    }, 
    {
        name: "user3",
        age:52

    }
]
   
    // generic tuple declare
    type GenericTuple<x, y> = [x, y]

    const manush: GenericTuple<string, string> =['Mr x', 'Mr y']
    
    const userWithId: GenericTuple<number, {name:string, email:string}> = [123, {name:'Mr X', email: 'a@gmail.com'}]
    //

}