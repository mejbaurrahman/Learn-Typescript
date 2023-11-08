{
    // Getter and setter
    class BankAcount {
      public readonly id: number;
       public name: string;
       private _balance: number; // jodi ei class er child e ei propertyta access korte hoi tahole private er poriborte protected hobe

        constructor(id: number, name: string, _balance: number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        // addDeposit(amount: number){
        //      this._balance += amount;
        // }
        //setter
        set deposit(amount: number){
             this._balance+=amount;
        }
        // getter
        get balance(){
           return this._balance
        }
        // getBalance(){
        //     return this._balance;
        // }
    }

    const goribManuserAccount = new BankAcount(111, "Mr. Gorib", 20);
    // goribManuserAccount.addDeposit(40);
    // const my_balance= goribManuserAccount.getBalance();
    
    // 
    goribManuserAccount.deposit =40;
    const my_balance = goribManuserAccount.balance; // function hoileo propertyr moto kore bebohar korte parsi get balance method k;
     // function hoileo propertyr moto kore bebohar korte parsi get balance method k;
    console.log(my_balance)
}