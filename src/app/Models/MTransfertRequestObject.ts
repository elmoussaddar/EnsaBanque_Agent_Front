import { TransfertFRequestObject } from "./TransfertFRequestObject";

export class MTransfertRequestObject{
    
    public senderFirstName : string;
    public senderLastName : string;

    public senderPhoneNumber : string;
    public motif : string;
    public notifyBeneficiary : boolean;
    public totalAmount : number;
    public sentByAgentWithId : number;
    public typeFrais : string;
    public transfers : Array<TransfertFRequestObject> = new Array<TransfertFRequestObject>(); ;


}