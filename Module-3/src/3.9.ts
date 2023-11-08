{
    // abstraction  1. interface, 2. abstract class use kore

    interface Vehicle1{
       
        //idea or just declare function
        startEngine(): void;
        stopEngine(): void;
        move(): void;

    }

    class Car implements Vehicle1{
        // implement the function interface
        startEngine(): void {
         console.log("Starting the Engine")
        }
        stopEngine(): void {
            console.log("Stopping the Engine")
        }
        move(): void {
            console.log("Move the car")
        }
        test(){
            console.log("I am just testing");
        }


    }
  

    const Toyota = new Car();
    Toyota.startEngine();
    Toyota.stopEngine();
    Toyota.move();
    // 

    // abstract class 
    // ...........................................................................
    // idea
   abstract class Car2 {
     abstract startEngine(): void;
      abstract stopEngine(): void ;
      abstract move(): void ;
           test(){
               console.log("I am just testing");
           }
    }

    class ToyotaCar extends Car2{
        startEngine(): void {
            console.log("Starting the Engine")
           }
           stopEngine(): void {
               console.log("Stopping the Engine")
           }
           move(): void {
               console.log("Move the car")
           }
    }

}