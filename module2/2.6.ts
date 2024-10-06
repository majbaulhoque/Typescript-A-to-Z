{
    // Constraints
    const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student : T) =>{
        const course = "Next Level Wev Development";
        return {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent<{
        id: 1,
        name: "Mr X",
        email: "hi",
        dev: 'Front'
    }>;
    // ! Student three 3 error dichey karon ami constraints korar somoy mention korchilam id, name, email ei gula na thakar karone error dekhaitece
    const student3 = addCourseToStudent({emni: 'emni'})
    const student2 = addCourseToStudent<{
        id: 2,
        name: "Mr y",
        email: "hi",
        hasWatch: 'Front'
    }>
    // 
}