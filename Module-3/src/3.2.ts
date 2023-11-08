{
    // OPP-- inheritance

    // koyekta class e common kisu thakle Person class declare kora holo
    class Person{
        name: string;
        age: number;
        address: string;
        

        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
            
        }
        getSleep(numOfHours: number){
            console.log(`${this.name}: ${numOfHours}`);
        }
    }
    class Student extends Person{
        //Person theke field gula peyesi;
        constructor(name: string, age: number, address: string){
            super(name, age, address); // extends class theke niye asa holo

        }
        getSleep(numOfHours: number){
            console.log(`${this.name}: ${numOfHours}`);
        }

        // takeClass(numOfClass: number){
        //     console.log(`${this.name}: ${numOfClass}`);
        // }
    } 
    class Teacher extends Person{
        designation: string;

        constructor(name: string, age: number, address: string, designation: string){
            super(name, age, address);
            this.designation = designation;
        }
        getSleep(numOfHours: number){
            console.log(`${this.name}: ${numOfHours}`);
        }

        takeClass(numOfClass: number){
            console.log(`${this.name}: ${numOfClass}`);
        }
    } 

    const student1 = new Student("Mr X", 20, "Uganda");
    
    const teacher1 = new Teacher("Mr Y", 20, "Uganda", "Teacher");	

    

    // 
}