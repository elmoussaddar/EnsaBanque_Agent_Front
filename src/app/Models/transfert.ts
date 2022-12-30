import { TransferStatus } from "../enum/TransferStatus";
import { TransfertType } from "../enum/TransfertType";
import { TypeFrais } from "../enum/TypeFrais";

export class Transfert {

  public id : Number = new Number();
  public receivedAt : Date| null = new Date();
  public  transferReference : String = new String("");
  public  codePin : String = new String();

  public ransferCost : Number = new Number();
  public typeFrais : TypeFrais;

  public transferAmount : Number = new Number();

  public toBeNotified : Boolean = false;
  public status : TransferStatus;

  public  type: TransfertType ;

  public motifExtourne: String ;

  public  motifRestitution: String ;

  public motifBlocage:  String ;

  public   motifDeblocage : String ;

  public   Jblocage : Date | null ;

  public   JDeblocage : Date | null ;

  public Amount: Number = new Number() ; // transfer amount
  public transferCost : Number=50;

  public finalAmountOperation : Number = new Number();
  public finalAmountTransfer : Number = new Number();

  public  receiverFirstName : String = new String();

  public  receiverLastName : String = new String();

  public  receiverPhoneNumber : String = new String();

}