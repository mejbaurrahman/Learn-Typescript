{
    // Union types
    // type FrontEndDeveloper = 'Fakibazi Developer' | 'Junior Developer' 
    // type FullStackDeveloper = 'Fakibazi Developer' | 'Expert Developer'| 'frontEndDev' 
    
    // const newDeveloper: FrontEndDeveloper = 'Fakibazi Developer'; 

    // type Developer = FrontEndDeveloper| FullStackDeveloper;
    //  const newFUllStackDev: Developer = 'Junior Developer';

    // type User={
    //     name: string;
    //     email?: string;
    //     gender: "male" | "female";
    //     bloodGroup: "O+"|"A+"|"AB+"|"B+"

    // }

    // const user1: User ={
    //     name: 'John',
    //     email: 'john@gmail.com',
    //     gender:'male',
    //     bloodGroup:'O+'

    // }

    // Union Types

    type FrontEndDeveloper = {
        skills: string[];
        designation1: "FrontEnd Developer";

    }
    type BackEndDeveloper = {
        skills: string[];
        designation2: "BackEnd Developer";

    }

    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper; 

    const fullStackDeveloper : FullStackDeveloper ={
        skills:['Html', 'JavaScript', 'Express'],
        designation1: 'FrontEnd Developer',
        designation2: 'BackEnd Developer'
        
    }
}