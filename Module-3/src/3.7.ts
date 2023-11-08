{
    // 
    class Counter{
       static count: number =0; // when you declare static before property this is very close to class so you called this property in the class using className.static property , example: static count:number = 0; then you can use this property by Counter.count not this.count // static hoile oi peorperty k je kono instance theke call dilei sob jaigar jonnei kaj korbe. 
       static increment(){
            return Counter.count++;
        }
       static decrement(){
            return Counter.count--;
        }

    }


    // const instance1 = new Counter();
    // console.log(instance1.increment()) // 1
    // const instance2 = new Counter();
    // console.log(instance2.increment()) // 1// jodi static count thakto tahole 2 hoto.  
    // const instance1 = new Counter();
    console.log(Counter.increment()) 
    console.log(Counter.increment()) 
    console.log(Counter.increment()) 
    console.log(Counter.increment()) 
    // 
}