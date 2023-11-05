{
    //conditional type
    // ekta types man onno typer upor depended
    type A1 = number;
    type B1 = undefined;
    type X = A1 extends null ? true : false;
    type Y = A1 extends null ? true : B1 extends undefined ? true : false; 
    

    type sheikh ={
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    type CheckVehicle<T> = T extends keyof sheikh ? true : false;

    type HasShip = CheckVehicle<"ship">
    type HasTractor = CheckVehicle<"tractor">
    type HasPlane = CheckVehicle<"plane">
    
}