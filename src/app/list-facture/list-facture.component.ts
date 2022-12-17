import { PayerFactureRequest } from './../RequestEntities/PayerFactureRequest';
import { ListFactureRequest } from './../RequestEntities/ListFactureRequest';
import { Facture } from './../interfaces/Facture';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../_services/Client.service';
import { TokenStorageService } from '../_services/token-storage.service';

const numTelAccess = window.sessionStorage.getItem("username");
@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css']
})
export class ListFactureComponent implements OnInit {

  listFacture:Facture[];
  listFactureRequest:ListFactureRequest={
    ref:"",
    creancier:window.sessionStorage.getItem("creancier"),
    numTel:numTelAccess,
  }

  payerFactureRequest:PayerFactureRequest={
    ref:"",
    creancier:"",
    ownerphone:numTelAccess,
  

  }
  constructor( private router: Router, private location:Location,private clientService :ClientService,private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {

   
    
   
  }
payerFactureClicked(ref:String){

  this.payerFactureRequest.ref=ref;
  
  
}


  goBack(){
this.location.back();
  }
}
