//Account class
abstract class Account{
    Acc_No:number;
    Balance:number;
    debitAmount(){}
    creditAmount(){}
    getBalance(){}
}
// IAccount class

interface IAccount{
   Date_Of_Opening:number;
   addCustomer()
   removeCustomer()
}
// Saving_account class

class Saving_Account extends Account implements IAccount {
   Date_Of_Opening: number;
   Min_Balance:number;

   addCustmer() {
       throw new Error("Method not implemented.");
   }
   removeCustmer() {
       throw new Error("Method not implemented.");
   }
}
// Current_account class
class Current_Account extends Account implements IAccount {
   Date_Of_Opening: number;
   Inerrest_Rate:number;

   addCustomer() {
       throw new Error("Method not implemented.");
   }
   removeCustomer() {
       throw new Error("Method not implemented.");
   }
}