import { VirementRequest } from './../RequestEntities/VirementRequest';
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TokenStorageService } from "../_services/token-storage.service";
import { ClientService } from '../_services/Client.service';
import Swal from 'sweetalert2';
import { Client } from '../Models/client';
@Component({
    selector:'app-virement-form',
    templateUrl:'./virement-form.component.html'
})

 export class VirementFormComponent {
  IdentTypes:string[] = ["C.I.N","Passport","Driver License"];
  transfert_type = 1;
  identity_paper_type = 1;
  Search=false;
  SearchReceiver=false;
  sendOTP=false;
  OTPVerified =false;
  
  public client:Client = new Client();
    virementRequest:VirementRequest={
      montant:0.0,
      ribDest:"",
      ribSrc:"demo rib",
    }

    showNotEnoughCredit:boolean = false;
    constructor(private router: Router, private tokenStorage:TokenStorageService,private clientService :ClientService) {}
    ngOnInit(): void {

      
      }

      effectuerVirementClicked(){

     
      }
      onSearch(){
        this.Search=true;
      }

      onSearchReceiver(){
        this.SearchReceiver=true;
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

      }
}