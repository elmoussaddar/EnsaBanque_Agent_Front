import { Transfert } from "./transfert";

export class MTransfer {

    public createdAt : Date| null = new Date();
    public endedAt : Date| null = new Date();
    public id_client : Number | null = new Number();
    public totalAmount : Number = new Number();

    public  motif : String = new String();

    public  senderLastName : String = new String();
    public senderFirstName: String = new String();


    public  senderPhoneNumber : String = new String();
    public  senderCIN : String = new String();
    public  prospect_client : Boolean = false;

    public sentByAgentWithId : Number = new Number();

    public  transferByCash : Boolean | null = false;
    public  notifyBeneficiary : Boolean = false;
    public typeFrais : string ;

    public transfers : Array<Transfert> = new Array<Transfert>();



}