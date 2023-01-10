import { TransferStatus } from "../enum/TransferStatus";
import { TransfertType } from "../enum/TransfertType";
import { TypeFrais } from "../enum/TypeFrais";

export class Transfert {

  public id : Number | null = new Number();
  public receivedAt : Date| null = new Date();
  public  transferReference : String = new String("");
  public  codePin : String = new String();

  public ransferCost : Number | null = new Number();
  public typeFrais : TypeFrais | null | String;

  public transferAmount : Number | null = new Number();

  public toBeNotified : Boolean = false;
  public status : TransferStatus | null;

  public  type: TransfertType | null;

  public motifExtourne: String ;

  public  motifRestitution: String ;

  public motifBlocage:  String ;

  public   motifDeblocage : String ;

  public   Jblocage : Date | null ;

  public   JDeblocage : Date | null ;

  public transferCost : Number | null;

  public finalAmountOperation : Number | null = new Number();
  public finalAmountTransfer : Number | null = new Number();

  public  receiverFirstName : String | null = new String();

  public  receiverLastName : String | null = new String();

  public  receiverPhoneNumber : String | null = new String();

}