import { clientResponseObject } from './../ResponseEntities/clientResponseObject';
import { transfertResponseObject } from './../ResponseEntities/transfertResponseObject';
import { MTransferResponseObject } from './../ResponseEntities/MTransferResponseObject';
import { ClientServicesService } from './../_services/client-services.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Client } from '../Models/client';
import { TransferStatus } from '../enum/TransferStatus';
import { AccountStatus } from '../enum/AccountStatus';

@Component({
  selector: 'app-serve-client',
  templateUrl: './serve-client.component.html',
  styleUrls: ['./serve-client.component.css']
})
export class ServeClientComponent implements OnInit {
  public client:clientResponseObject = new clientResponseObject();
  search_ref:boolean = false;
  transfert_not_found:boolean = false;
  transfert_blocked:boolean = false;
  client_blist:boolean = false;
  payment_done:boolean = false;
  payment_type:number = 1;
  have_wallet:number;
  transfertRef:string;
  check_wallet = false;
  otpSended = false;
  otpVerified:boolean = false;
  receiverInfoIsAvailable:boolean=false;
  sub_account_created: boolean;
  otpCode : Number = new Number();
  s:string = "hello";
  walletNumber: string ;
  walletIsAvailable: boolean= false;
  transfertObject : MTransferResponseObject = new MTransferResponseObject();

  constructor(private router: Router,private clientServices : ClientServicesService) { }

  ngOnInit(): void {

  }

  searchRef(){

    this.clientServices.getTransfertInfo(this.transfertRef).subscribe((data :MTransferResponseObject)=> {

      if(data == null){
        Swal.fire('Sorry\nTransfert not found', ':(', 'error').then(() => {
          location.reload();
        });

      }else if(data != null){
        if(data.transfers[0].status == TransferStatus.BLOCKED){
          Swal.fire('Sorry\nThe transfert is blocked', ':(', 'error').then(() => {
            location.reload();
          });

        } else  if(this.client_blist){
          Swal.fire('Sorry\nThe receiver\n\n' + this.s + '\n\nis blacklisted', ':(', 'error');
        }else {
          this.transfertObject = data;
          console.log(this.transfertObject);

          this.clientServices.getClientByPhoneNumber(this.transfertObject.senderPhoneNumber).subscribe(data => {

            if(data == null){
              Swal.fire('Sorry\nThe receiver does not not seem to be present in our database', 'you can go ahead and create an account.', 'info').then(() => {
                this.receiverInfoIsAvailable = false
              });
            }else if(data != null){
              this.client = data;
              console.log(this.client);
              this.receiverInfoIsAvailable = true;

            }
          })
        }
      }
    
      

    })


    this.search_ref = true;
    //this.transfert_not_found = true;
    //this.transfert_blocked = true;
    //this.client_blist = true;


   
  }

  validatePayment(){
    // tout le traitement a faire pour valider le payement
    this.payment_done = true;
    if(this.payment_done){
      Swal.fire('Transfert payed', 'Congratulations', 'success');
    }

    this.clientServices.serveTransfert();
  }

  searchWallet(){
   

    this.clientServices.getClientByAccountNumber(this.walletNumber).subscribe((data : clientResponseObject) =>{

      if(data == null){
        Swal.fire('Sorry\nWallet Not found !', ':(', 'error');
        this.walletIsAvailable = false;

      } else if(data.accounts[0].status == AccountStatus.SUSPENDED){
        Swal.fire('Sorry\nWallet is suspended !', ':(', 'error');

      }else if (data != null){
        this.client= data;
        console.log(this.client);
        this.walletIsAvailable = true;

      }

     
    });
    this.check_wallet = true;

  }

  setWallet(value:number){
    this.have_wallet = value;
  }

  goToHome(){
    this.router.navigate(['/clientHome/Home']);
  }

  saveAccount(clientForm: NgForm){
    this.sub_account_created = true;
 
    this.clientServices.addClient(this.client).subscribe(data =>{
      console.log(data);

      if(data != null){
        Swal.fire('Congratulations', 'Subscription Account Created', 'success').then(() =>{
          this.walletIsAvailable = true
        });

      }
     
     },
     error => {
      console.log(error);
      // handle the error here
      Swal.fire(" the registration process encountred an error ", error.message,'error' ).then(()=>{
        this.walletIsAvailable = false;
        location.reload();
  
      });
    }
    );
  
    
  }

  sendOTP(){
    this.otpSended = true;

    this.clientServices.sendOTP(this.client.phoneNumber).subscribe(data => {
      console.log(data);
      Swal.fire('verfication code sent !', 'it should be received momentarily', 'success')

    },
    error => {
      Swal.fire(" failed to send OTP Code ! ", error.message,'error' );
    })
  }
  verifyOTP(){
    this.otpVerified = true;

    this.clientServices.verifyOTP(this.client.phoneNumber,this.otpCode).subscribe(data =>{
      console.log(data);
      if(data == true){
        Swal.fire('Code Verified', 'OTP Verification is a success , proceed !', 'success');
        this.otpVerified= true;


      }else if(data == false){
        Swal.fire('Code Not Verified', 'UNVALID  OTP Code !', 'warning');
        this.otpVerified= false;
      }
    })
  }

  
}
