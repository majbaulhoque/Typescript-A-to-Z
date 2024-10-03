{
    // Nullable Type
    const searchName = (value: String) =>{
        if(value){
            console.log('Searching')
        } else {
            console.log('There is nothing to search')
        }
    };
    searchName('Hi');

    // Unknown Type 

    const getSpeedMeterPerSecond = (value : unknown) =>{
        if(typeof value === "number"){
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`)
        } 
        else if(typeof value === "string"){
            const [result , unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`)
        } else{
            console.log("Wrong Value Input")
        }
    }
    getSpeedMeterPerSecond(`2600 kmh^-1`)

    // Never Type
    const throwError = (msg: string): never =>{
        throw new Error(msg)
    };
    throwError("Mushkil se error hogaya")
}