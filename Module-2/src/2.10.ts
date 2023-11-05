{

    //mapped types 
    //mapped type onkta map er moto kaj kore

    const arrOfNumbers: number[]= [1,4,5];
    // const arrOfString : string[] = ["1", "4", "5"];

    const arrOfString: string[] = arrOfNumbers.map((number)=>number.toString())

    console.log(arrOfString)

    type AreaNumber ={
        height: number,
        width: number
    };
    // type AreaString ={
    //     height: string;
    //     width: string;
    // }
    // type AreaString = {
    //     [key in keyof AreaNumber] : string;
    // }

    type AreaString<T> ={
        [key in keyof T]: T[key]
    }

    const area:AreaString<{height:string; width:number}>={
        height: "100",
        width: 100
    }
    //
}