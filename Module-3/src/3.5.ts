{
    // Access Modifier
    class BankAcount {
      public readonly id: number;
       public name: string;
       private _balance: number;

        constructor(id: number, name: string, _balance: number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        addDeposit(amount: number){
             this._balance += amount;
        }

        getBalance(){
            return this._balance;
        }
    }

    const goribManuserAccount = new BankAcount(111, "Mr. Gorib", 20);
    goribManuserAccount.addDeposit(40);
    const my_balance= goribManuserAccount.getBalance();
    console.log(my_balance)
    // 
}