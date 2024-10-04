{
    // interface 
    type User1 = {
        name: string;
        age: number
    }

    type UserWithRole1 = User1 & { role : string};

    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user1: UserWithRole2 = {
        name: 'abc',
        age: 100,
        role: 'test'
    }

    interface User2 {
        name: string;
        age: number;
    }

    // object 

    type Roll = number[];


    interface Roll2 {
    [index: number] : number
    }

    const rollNumber1: Roll = [1, 2, 3];



}