{
    const craeteArray = (param: string)=>{
        return [param]
    }

    const res1 = craeteArray('Bangladesh');

    const createArrayWithGeneric = <T>(param: T)=>{
        return [param]
    }

    type User = {
        id: number, 
        name: string
    }
    const resGeneric = createArrayWithGeneric<string>('bangladesh');
    const resgeneric2 = createArrayWithGeneric<User>({id: 1, name:'Bangladesh'})
   

    // tuple generic function
    const createGenericWithTuple = <T, Q>(param1: T, param2:Q): [T, Q]=>{
        return [param1, param2]
    }

    type User2 = {
        id: number, 
        name: string
    }
    const resGeneric3 = createGenericWithTuple<number, string>(1, 'bangladesh');
    const resgeneric4 = createGenericWithTuple<{id: number, name: string}, {id: number, name: string}>({id: 1, name:'Bangladesh'},{id: 1, name:'Bangladesh'})

    
    const addCourseToStudent = <T>(student: T)=>{
        const course = "Next level Web Dev"
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name:'Mr,x', email: 'x@gmail.com', devType:'Next level Web developer'})
    const student2 = addCourseToStudent({name:'Mr,Y', email: 'x@gmail.com', devType:'Next level Web developer', hasWatch: 'AppleWatch'})

}