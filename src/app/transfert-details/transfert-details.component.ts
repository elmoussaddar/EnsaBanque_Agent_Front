import { Beneficiare } from './../interfaces/Beneficaire';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../interfaces/Client';
import { Location } from '@angular/common';

import { CreatebankAccountClientRequest } from '../RequestEntities/CreateBankAccountClientRequest';
import { ClientService } from '../_services/Client.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Transfert } from '../interfaces/Transfert';

@Component({
  selector: 'app-transfert-details',
  templateUrl: './transfert-details.component.html',
  styleUrls: ['./transfert-details.component.css']
})
export class TransfertDetailsComponent implements OnInit {

  constructor(private router: Router, private tokenStorage:TokenStorageService,private clientService :ClientService,private location:Location) { }

  payTransferButtonClicked:boolean=false;
   
  titres=["M","Mme"];
  typesPieceIdentity=["Carte National","Permi de Consuire","Passport"]
  transfert:Transfert={
    idAgent:4,
    etatTransfert:"a servire",
    idTransfert:23,
    montantTransfert:800.0,
    dateEmissionTransfert:new Date(),
    nomBeneficiere:"ahmed",
    prenomBeneficiere:"el moussaddar",
    nomSender:"abdelmounim",
    prenomSender:"el moussaddar",
    refTransfert:"HG349865935"
  }

  beneficiaire : Beneficiare ={
    Email:"",
    adresseLegal:"",
    dateExpirationPieceIdentity:null,
    DateNaissance:null,
    GSM:"",
    nom:"",
    numPieceIdentity:"",
    payeAdresse:"",
    payeEmissionPieceIdentity:"",
    payeNationality:"",
    prenom:"",
    Profession:"",
    titre:"",
    typePieceIdentity:"",
    Ville:"",
    
  }



  ngOnInit(): void {
  
   
  }
  goBack(){

    this.beneficiaire ={
      Email:"",
      adresseLegal:"",
      dateExpirationPieceIdentity:null,
      DateNaissance:null,
      GSM:"",
      nom:"",
      numPieceIdentity:"",
      payeAdresse:"",
      payeEmissionPieceIdentity:"",
      payeNationality:"",
      prenom:"",
      Profession:"",
      titre:"",
      typePieceIdentity:"",
      Ville:"",
      
    }
    this.location.back();

      }


      payTransfertClicked(){
        console.log("payTransfertClicked");
        console.log("beneficiare :",this.beneficiaire);
        this.payTransferButtonClicked=true;
;      }
  createAccountClicked(){
 
  }

 

}
