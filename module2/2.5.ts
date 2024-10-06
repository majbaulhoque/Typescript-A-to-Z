{
    // Function with Generics
    const createArray = (param : string) : string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T) : T[] =>{
        return [param]
    }

    const res1 = createArray('Bangladesh');
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')

    type User = {id: number; name: string}

    const resGenericObj = createArrayWithGeneric<User>({id: 222, name: 'nothing'})
    
    const createArrayWithTuple = <T, Q>(param1: T, param2: Q) : [T,Q] =>{
        return [param1, param2]
    }

    const res10 = createArrayWithTuple<string, number>("Bangladesh",222);
    const res11 = createArrayWithTuple<string, {name:string}>("Bangladesh",{name: 'Asia'})

    const addCourseToStudent = <T>(student:T) =>{
        const course = "Next Level Web Development"
        return {
            ...student,
            course
        }
    }
    const student = addCourseToStudent({name: 'f',email: 'fff', devType: 'Nl'});
    const student2 = addCourseToStudent({name: 'f',email: 'fff', hasWatched: 'Nl'})
}