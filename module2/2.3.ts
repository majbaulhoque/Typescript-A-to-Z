{
    // Generic type

    type GenericArray<t> = Array<t>

    // const rollNumbers : number[] = [3, 6, 8];
    const rollNumbers : GenericArray<number> = [3, 6, 8];
    // const mentors: string[] = ['X','Y','Z'];
    const mentors: GenericArray<string> = ['X','Y','Z'];
    // const boolArray : boolean[] = [true, false, true];
    const boolArray : GenericArray<boolean> = [true, false, true];

    const user : GenericArray<{name: string, age: number}> = [
        {
            name: 'Majba',
            age: 100
        },
        {
            name: 'Zia',
            age: 23
        },
    ]

    // Generic tuple

    type GenericTuple<X, Y> = [X, Y];
    const Manush: GenericTuple<string, string> = ['Mr.x', 'Mr.y'];

}