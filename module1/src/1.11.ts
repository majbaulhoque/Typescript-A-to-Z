{
    // ! Ternary Operator || Optional Chain || nullish coalescing
    const age: number = 18;

    if(age >= 18){
        console.log("Adult");
    } else {
        console.log("Not Adult")
    }

    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log(isAdult);

// Nullish Coalescing operator 
// If any decision make based on null and undefine then used nullish coalescing
    const isAuthenticate = "null";

    const result1 = isAuthenticate ?? "guest";
    const result2 = isAuthenticate ? isAuthenticate : "Guest"
    console.log({result1}, {result2})

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress ? : string;
        }
    }

    const user : User = {
        name: 'Majba',
        address: {
            city: 'Ctg',
            road: "narail road",
            presentAddress: 'ctg town'
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No Permanent ADDRESS";
    console.log(permanentAddress)
}