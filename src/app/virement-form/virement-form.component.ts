import { beneficiaryResponseObject } from './../ResponseEntities/beneficiaryResponseObject';
import { MTransfer } from './../Models/MTransfer';
import { ClientServicesService } from './../_services/client-services.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { Client } from '../Models/client';
import { clientResponseObject } from '../ResponseEntities/clientResponseObject';
import { Beneficiare } from '../interfaces/Beneficiare';
import { Transfert } from '../Models/transfert';


@Component({
    selector:'app-virement-form',
    templateUrl:'./virement-form.component.html'
})

 export class VirementFormComponent implements OnInit{
  IdentTypes:string[] = ["C.I.N","Passport","Driver License"];
  transfert_type = 1;
  identity_paper_type = 1;
  cinNumber = "";
  Search=false;
  typeFrais:String[] = ["CHARGE_CLIENT_DONNEUR_ORDER","CHARGE_BENIFICIAIRE","CHARGE_BOTH"];
  clientDataAvailbale = false;
  SearchReceiver=false;
  sendOTP=false;
  senDnotification:boolean;
  OTPVerified =false;
  phoneNumber:String;
  typeFraiChoisie: string;
  listData: Client[] = [];
  transfert : MTransfer = new MTransfer();
  montantTransfert: number;
  beneficiaries : Array<beneficiaryResponseObject>
  newBeneficiairy : Beneficiare = new Beneficiare();
  benneficiariesChoosed : Array<beneficiaryResponseObject> = new Array<beneficiaryResponseObject>();
  transfertsBuilt : Array<Transfert> = new Array<Transfert>();
  fondsAvailable = false;
  codeOTPReceived:Number;

  
  public client:clientResponseObject = new clientResponseObject();
   
    showNotEnoughCredit:boolean = false;
    constructor(private router: Router,private clientServices: ClientServicesService) {
      this.senDnotification = false;
      this.montantTransfert = 0;
    }
    ngOnInit(): void {
      }

      effectuerVirementClicked(){

     
      }

      toggleSwitchSendNotification(){
        this.senDnotification = !this.senDnotification;
      }
      onSearch(){
        this.Search=true;
        this.clientServices.getClientByPhoneNumber(this.phoneNumber).subscribe(data =>{
          this.clientDataAvailbale = true;
          this.client = data;

          if(data == null){
            Swal.fire(" this client does not have an account", " no entry in database",'error' );

          }

         
          console.log(data);
        });
      }

      finishClicked(){
        let agentIdstring =  localStorage.getItem("agentId");
        let agentId = Number(agentIdstring); 

        console.log(this.benneficiariesChoosed);

        for(let beneficiaryObject of this.benneficiariesChoosed){
          this.transfertsBuilt.push({
            codePin:"", //done
            finalAmountOperation:null, //done
            finalAmountTransfer:null, //done
            id:null, //done
            Jblocage:null, //done
            JDeblocage:null,//done
            motifBlocage:"", //done
            motifDeblocage:"", //done
            motifExtourne:"", //done
            motifRestitution:"", //done
            ransferCost:null, //done
            receivedAt:null, //done
            receiverFirstName:beneficiaryObject.firstName, // done
            receiverLastName:beneficiaryObject.lastName, //done
            receiverPhoneNumber:beneficiaryObject.phoneNumber, //done
            status:null, //done
            toBeNotified : this.senDnotification, // done
            transferAmount:this.montantTransfert, // done
            transferCost:10, //by default
            transferReference:"", // done
            type:null, //done
            typeFrais:"CHARGE_BOTH", //done

          })
        };
        console.log(this.transfertsBuilt);
        this.transfert = {
          createdAt:null, //done
          endedAt:null, //done
          id_client: this.client.id, //done
          motif :"", //done
          typeFrais: "CHARGE_BOTH",
          notifyBeneficiary: this.senDnotification, //done
          transfers: this.transfertsBuilt,//done
          senderCIN : this.client.cinNumber,//done
          senderFirstName : this.client.firstName,//done
          senderLastName: this.client.lastName, //done
          senderPhoneNumber : this.client.phoneNumber, //done
          sentByAgentWithId :agentId, //done
          totalAmount : this.montantTransfert * this.benneficiariesChoosed.length, //done
          transferByCash :false, //done
          prospect_client: false, //done
        };

        console.log(this.transfert);

        this.clientServices.getConfirmationOfFondAvailability(this.client.cinNumber,this.transfert.totalAmount).subscribe((res) => {

            console.log(res);
        
          
            Swal.fire('Balance is Available', 'you may proceed', 'success').then(() => {
              this.fondsAvailable = true;
            });
          
         

        },
        error => {
          if(error.statusText =="OK"){
            Swal.fire('Balance is Available', 'you may proceed', 'success').then(() => {
              this.fondsAvailable = true;
            });
          }
          else{
            console.log(error);
            Swal.fire('Client Does Not Have suffisant balance', ':)', 'warning').then(() => {
              this.fondsAvailable = false;
            });
          }  
          
         
        });
      }

      onchange(event : Event,row : beneficiaryResponseObject){
        console.log((<HTMLInputElement>event.target).checked);
        console.log(row);
        if((<HTMLInputElement>event.target).checked){
          this.benneficiariesChoosed.push(row);
        }else {
          this.benneficiariesChoosed = this.benneficiariesChoosed.filter(r => r != row);
        }
      }
    
      onSendOTP(){

        this.clientServices.sendOTP(this.client.phoneNumber).subscribe(data => {
          Swal.fire('Code Sent !', ' For OTP Verification', 'info').then(() => {
            this.sendOTP=true;

          });


        })
       }

      verifyOTP(){


        this.clientServices.verifyOTP(this.client.phoneNumber,this.codeOTPReceived).subscribe(data => {
          if(data == false){
            Swal.fire('Code Not Verified', ':)', 'error').then(() => {
              this.OTPVerified = false;
  
            });
          }else {
            Swal.fire('Code Verified', 'OTP Verification', 'success').then(() => {
              this.OTPVerified = true;
  
            });
          }
         


        },
        error => {
          console.log(error);
         
        })
        
      }

      finalize(){
        if (window.confirm('Are you sure you want to Issue this transefer ?')) {
          this.clientServices.registerTransfert(this.transfert).subscribe(data => {
            Swal.fire('Transfert Registred !', 'Operation is a Success', 'success').then(() => {
            location.reload();  
            });
          },
          error => {
            console.log(error);
            Swal.fire("Transfert Wasn't Sent ! ", error.message, 'error').then(() => {
              location.reload();
            });
          });
        }
      }

      addProspectClientClicked(){
        console.log("addProspectClient : ",this.client);
        this.clientServices.addClient(this.client).subscribe(data => {

          if(data != null){
            this.clientDataAvailbale = true;
            this.showSweetAlertMessage('Client Registred !','Client now has an entry in the database');

          }

        })
      }

      showSweetAlertMessage(title : string, html:string) {
        console.log('showSweetAlertMessage triggered');
        Swal.fire(title, html, 'success');
        
        }

      onAddClient(){
        console.log("add beneficiary clicked : ",this.newBeneficiairy);
        this.clientServices.addBeneficiairieToClient(this.newBeneficiairy,this.client.cinNumber).subscribe(data => {

          
            this.client = data;
            console.log(this.client);
            this.showSweetAlertMessage('beneficiary Registred to client !','request is a success');
            this.newBeneficiairy = {
              cin:"",
              firstName:"",
             lastName:"",
             phoneNumber:"", 
            };

          

        },
        error => {
          console.log(error);
        })
        
      }
      public onOpenModal(client : Client, mode: string): void {
        const container = document.getElementById("mainContainer");
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-bs-toggle', 'modal');
        if (mode === 'add') {
          button.setAttribute('data-bs-target', '#addClientModal');
        }
        
        container?.appendChild(button);
        button.click();
      }
}