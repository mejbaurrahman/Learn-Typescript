{
//     //

//     //generic type declaration

//     //type GenericArray = Array<string>
//     type GenericArray<T> = Array<T>

//     // const rollNumbers: number[] = [1, 2, 3] // both are same
//     const rollNumbers: Array<number> = [1, 2, 3]
//     // const mentors: string[] = ["a", "b", "c" ] 
//     const mentors: GenericArray<string> = ["a", "b", "c" ] 
//     // const boolArray: boolean[] = [true, false,true]
//     const boolArray: Array<boolean> = [true, false,true]

//  // generic use kore array of object
//     const user: GenericArray<{name:string, age: number}> =[
//     {
//         name: "user",
//         age:50
//     },
//     {
//         name: "user2",
//         age:51

//     }, 
//     {
//         name: "user3",
//         age:52

//     }
// ]
   
//     // generic tuple declare
//     type GenericTuple<x, y> = [x, y]

//     const manush: GenericTuple<string, string> =['Mr x', 'Mr y']
    
//     const userWithId: GenericTuple<number, {name:string, email:string}> = [123, {name:'Mr X', email: 'a@gmail.com'}]
//     //

//     // generic use with type alias

//     //declare type alias
//     // type User ={
//     //     name:string,
//     //     roll:number
//     // }

//     // use interface 
//     interface User{
//         name:string;
//         roll:number;
//     }

//     //declare generic 

//     const user4: GenericArray<User> =[
//         {
//             name: 'Mr X',
//             roll:5
//         },
//         {
//             name: 'Mr Y',
//             roll:4
//         }]

    
// generic interface 

interface Developer <T, X> {
    name: string;
    computer:{
        brand: string;
        model: string;
        releseYear: number
    }, 
    smartWatch: T,
    bike?: X
}

type EmilabWatch ={
    brand: string,
    model: string,
    display: string
}
const poorDeveloper : Developer<EmilabWatch, null> ={
    name: 'Persian',
    computer:{
        brand: 'Microsoft',
        model: 'Microsoft234',
        releseYear: 2022
    },
    smartWatch: {
        brand:'emilab',
        model:"Kw66",
        display:'OLED'
    }

}

interface AppleWatch {
    brand: string,
    model: string,
    heartTrack: boolean,
    sleepTrack: boolean
}
const richDeveloper : Developer<AppleWatch
    , {engine:string, capacity: number}> ={
    name: 'RichDev',
    computer:{
        brand: 'Microsoft23',
        model: 'Microsoft23s4',
        releseYear: 2023
    },
    smartWatch: {
        brand:'Apple',
        model:"Kw66s",
        heartTrack: true,
        sleepTrack: true
    }, 
    bike:{
        engine:'Yzhama',
        capacity: 12
    }

}

}