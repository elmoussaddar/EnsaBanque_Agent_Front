import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Client } from '../Models/client';

@Component({
  selector: 'app-serve-client',
  templateUrl: './serve-client.component.html',
  styleUrls: ['./serve-client.component.css']
})
export class ServeClientComponent implements OnInit {
  public client:Client = new Client();
  search_ref:boolean = false;
  transfert_not_found:boolean = false;
  transfert_blocked:boolean = false;
  client_blist:boolean = false;
  payment_done:boolean = false;
  payment_type:number = 1;
  have_wallet:number;
  check_wallet = false;
  otpSended = false;
  otpVerified:boolean;
  sub_account_created: boolean;
  s:string = "hello";
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  searchRef(){
    this.search_ref = true;
    //this.transfert_not_found = true;
    //this.transfert_blocked = true;
    //this.client_blist = true;
    if(this.transfert_not_found){
      Swal.fire('Sorry\nTransfert not found', ':(', 'error');
    }else if(this.transfert_blocked){
      Swal.fire('Sorry\nThe transfert is blocked', ':(', 'error');
    }else if(this.client_blist){
      Swal.fire('Sorry\nThe receiver\n\n' + this.s + '\n\nis blacklisted', ':(', 'error');
    }
  }

  validatePayment(){
    // tout le traitement a faire pour valider le payement
    this.payment_done = true;
    if(this.payment_done){
      Swal.fire('Transfert payed', 'Congratulations', 'success');
    }
  }

  searchWallet(){
    this.check_wallet = true;
    if(!this.check_wallet){
      Swal.fire('Sorry\nWallet Not found', ':(', 'error');
    }
  }

  setWallet(value:number){
    this.have_wallet = value;
  }

  goToHome(){
    this.router.navigate(['/clientHome/Home']);
  }

  saveAccount(clientForm: NgForm){
    this.sub_account_created = true;
    if(this.sub_account_created){
      Swal.fire('Congratulations', 'Subscription Account Created', 'success');
    }
    
  }

  sendOTP(){
    this.otpSended = true;
  }
  verifyOTP(){
    this.otpVerified = true;
    if(this.otpVerified == true)
    Swal.fire('Code Verified', 'OTP Verification', 'success');
    else  Swal.fire('Code Not Verified', ':)', 'error');
  }

}
