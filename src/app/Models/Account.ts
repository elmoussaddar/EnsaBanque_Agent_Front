import { AccountStatus } from "../enum/AccountStatus";

export class Account{
    public id:Number = new Number();
    public accountNumber:String = new String();
    public balance: Number = new Number();
    public status : AccountStatus;
} 