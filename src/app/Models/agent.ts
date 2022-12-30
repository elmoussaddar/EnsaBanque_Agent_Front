import { Client } from 'src/app/Models/client';
import { AccountStatus } from '../enum/AccountStatus';
import { Account } from './Account';
export class Agent extends Client{

    public accounts : Array<Account> = [{accountNumber:"0",balance:0,id:0,status: AccountStatus.ACTIVATED}]
}