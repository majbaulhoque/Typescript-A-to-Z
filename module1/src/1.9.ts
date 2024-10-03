{
    // ! Type Alias for object 

    type student = {
        name: string;
        age:  number;
        gender: string;
        contactNo ? : string;
        address: string;
    }
    const student1: student = {
        name : 'Ziaur',
        age: 24,
        gender: 'Male',
        contactNo: '013',
        address: 'Narail',
    };
    const student2: student = {
        name : 'Ziaur',
        age: 24,
        gender: 'Male',
        address: 'Narail',
    };

    // ! Type Alias for function 
    type Add = (num1: number, num2: number) => number;

    const add : Add = (num1, num2) => num1 + num2
}