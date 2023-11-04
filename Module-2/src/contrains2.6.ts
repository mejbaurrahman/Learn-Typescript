{
    //constraints 
    const addCourseToStudent = <T extends {
        id:number;
        name:string;
        email:string;
    }>(student: T)=>{
        const course = "Next level Web Dev"
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
        id: number,
        name: string,
        email: string,
        devType: string

    }>({
        id: 100,
        name:'Mr,x',
     email: 'x@gmail.com', 
     devType:'Next level Web developer'
    })

    const student2 = addCourseToStudent({
        id: 102,
        name:'Mr,Y', 
    email: 'x@gmail.com', 
    devType:'Next level Web developer', 
    hasWatch: 'AppleWatch'}) 

    const student3 = addCourseToStudent({id: 103, name:'Mr', email: 'em@gmail.com',})
}