import { MTransfer } from './../Models/MTransfer';
import { ClientServicesService } from './../_services/client-services.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { Client } from '../Models/client';
import { clientResponseObject } from '../ResponseEntities/clientResponseObject';
import { Beneficiare } from '../interfaces/Beneficiare';
import { beneficiaryResponseObject } from '../ResponseEntities/beneficiaryResponseObject';


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
  typeFrais:String;
  clientDataAvailbale = false;
  SearchReceiver=false;
  sendOTP=false;
  senDnotification:any;
  OTPVerified =false;
  phoneNumber:String;
  listData: Client[] = [];
  transfert : MTransfer = new MTransfer();
  beneficiaries : Array<beneficiaryResponseObject>
  newBeneficiairy : Beneficiare = new Beneficiare();
  
  public client:clientResponseObject = new clientResponseObject();
   
    showNotEnoughCredit:boolean = false;
    constructor(private router: Router,private clientServices: ClientServicesService) {}
    ngOnInit(): void {
      }

      effectuerVirementClicked(){

     
      }
      onSearch(){
        this.Search=true;
        this.clientServices.getClientByPhoneNumber(this.phoneNumber).subscribe(data =>{
          this.clientDataAvailbale = true;
          this.client = data;
          if(data == null){
            Swal.fire(" this client does not have an account", " no entry i database",'error' );

          }

          if(data != null){
            this.clientServices.getBeneficiairiesPerClient(data.cinNumber).subscribe(data =>{
              this.beneficiaries = data;
              console.log(this.beneficiaries);
            })
          }
          console.log(data);
        });
      }

      onSearchReceiver(){
        this.SearchReceiver=true;

        this.beneficiaries = this.beneficiaries.map(data =>data).filter(beneficiary => beneficiary.cin == this.cinNumber);


       

      }

      onSendOTP(){
        this.sendOTP=true;
       }

      verifyOTP(){
        this.OTPVerified = true;
        if(this.OTPVerified == true)
          Swal.fire('Code Verified', 'OTP Verification', 'success');
        else  Swal.fire('Code Not Verified', ':)', 'error');
      }

      finalize(){
        if (window.confirm('Are you sure you want to Issue this transefer ?')) {
          this.clientServices.registerTransfert(this.transfert).subscribe(data => {
            this.showSweetAlertMessage('Transfer Payed !','Well Done');
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

          if(data != null){
            this.beneficiaries.push(data);
            this.showSweetAlertMessage('beneficiary Registred to client !','request is a success');

          }

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