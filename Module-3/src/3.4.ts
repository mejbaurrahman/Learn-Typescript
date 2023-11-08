{
    // instanceof guard

    class Animal{
        name: string;
        species: string;

        constructor(name: string, species: string){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log("I am making sound");
        }
    }

    class Dog extends Animal{
       
        constructor(name: string, species: string){
            super(name, species);
         
        }

        makeBarke(){
            console.log("Dog is barking")
        }
    }
    class Cat extends Animal{
       
        constructor(name: string, species: string){
            super(name, species);
         
        }

        makeMew(){
            console.log("Dog is Mewing")
        }
    }

    //smart way te handle korar jonne caile amra function bebohar korte pari

    //animal is Dog is another form of boolean and it extra facility is boolean with the type
    const isDog = (animal:Animal): animal is Dog =>{
        return (animal instanceof Dog)
    }
    const isCat = (animal:Animal): animal is Cat =>{
        return (animal instanceof Cat)
    }
    const getAnimal = (animal: Animal)=>{
        if(isDog(animal)){
            animal.makeBarke();
        }else if(isCat(animal)){
            animal.makeMew()
        }else{
            animal.makeSound()
        }
    }
    const dog = new Dog("Dog vhai", "dog");
    const cat = new Cat("Cat vhai", "cat");

  
    //
}