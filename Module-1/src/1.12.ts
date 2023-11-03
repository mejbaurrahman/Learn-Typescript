{

// nullable types

const searchName =(value: string | null)=>{
    if(value){
        console.log('Searching')
    }else{
        console.log("There is nothing to search")
    }
}

searchName(null)

// unknown types
const getSpeedInMeterPerSecond = (value : unknown )=>{

    if(typeof value === "number"){
        const convertedValue = (value*1000)/3600;
        console.log(convertedValue)
}

    if(typeof value === "string"){
        const [result, unit] = value.split(' ');
        const convertedValue = (parseFloat(result)*1000)/3600;
        console.log(convertedValue)
}
else{
    console.log("wrong input")
}
}

getSpeedInMeterPerSecond(1000);

//never 
// when a function never return any thing then it can identify as never type

function throwError(message: string){
    throw new Error(message)
}

throwError("Muskil se error hogaya");
}