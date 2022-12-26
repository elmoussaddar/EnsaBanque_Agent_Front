import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenStorageService } from "../_services/token-storage.service";
import Swal from 'sweetalert2';
import { Client } from '../Models/client';


@Component({
    selector:'app-virement-form',
    templateUrl:'./virement-form.component.html'
})

 export class VirementFormComponent implements OnInit{
  IdentTypes:string[] = ["C.I.N","Passport","Driver License"];
  transfert_type = 1;
  identity_paper_type = 1;
  Search=false;
  SearchReceiver=false;
  sendOTP=false;
  OTPVerified =false;
  listData: Client[] = [];
  
  public client:Client = new Client();
   
    showNotEnoughCredit:boolean = false;
    constructor(private router: Router, private tokenStorage:TokenStorageService) {}
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

      onAddClient(){
        
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