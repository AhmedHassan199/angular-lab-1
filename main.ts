// account class
abstract class Account{
    Acc_No:number;
    Balance:number;
    debAmount(){}
    creidAmount(){}
    getBalance(){}
}
// iaccount class

interface IAccount{
   Date_Of_Opening:number;
   addCustmer()
   removeCustmer()
}
// saving_account class

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
// current_account class
class Current_Account extends Account implements IAccount {
   Date_Of_Opening: number;
   Inerrest_Rate:number;

   addCustmer() {
       throw new Error("Method not implemented.");
   }
   removeCustmer() {
       throw new Error("Method not implemented.");
   }
}