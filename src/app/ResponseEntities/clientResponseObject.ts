import { Client } from 'src/app/Models/client';
import { Account } from '../Models/Account';
export class clientResponseObject extends Client{
    public id : Number = new Number();

    public accounts : Array<Account> = new Array<Account>();
}