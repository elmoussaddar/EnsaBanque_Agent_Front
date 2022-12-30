import { beneficiaryResponseObject } from './beneficiaryResponseObject';
import { Client } from 'src/app/Models/client';
import { Account } from '../Models/Account';
export class clientResponseObject extends Client{
    public id : Number = new Number();
    public maxTransferAmountPerYear : Number = new Number();

    public beneficiaries : Array<beneficiaryResponseObject> | null = new Array<beneficiaryResponseObject>();

    public accounts : Array<Account> = new Array<Account>();
}