import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Beneficiare } from '../interfaces/Beneficiare';
import { Transfert } from '../interfaces/Transfert';
import { TokenStorageService } from '../_services/token-storage.service';
import { Location } from '@angular/common';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
//import  jsPDF from 'jspdf'; 
import jspdf from 'jspdf'; 
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-transfert-details',
  templateUrl: './transfert-details.component.html',
  styleUrls: ['./transfert-details.component.css']
})
export class TransfertDetailsComponent implements OnInit {
  @ViewChild('content') content:ElementRef;  
  constructor(private router: Router, private tokenStorage:TokenStorageService,private location:Location ) { }
  payTransferButtonClicked:boolean=false;
  restituerClicked:boolean=false;
  finishRestitution:number=0;
  finishExtourne:number=0;
  Search=false;
   servirButton:String = "Block";
  titres=["M","Mme"];
  motifdeRestitution=["Reciever Erreur","Mauvais Montant","Autre"]
  transfert:Transfert={
    idAgent:4,
    etatTransfert:"a servir",
    idTransfert:23,
    montantTransfert:800.0,
    dateEmissionTransfert:new Date(),
    nomBeneficiere:"ahmed",
    prenomBeneficiere:"el moussaddar",
    nomSender:"abdelmounim",
    prenomSender:"el moussaddar",
    refTransfert:"HG349865935",
    fraisdeTransfert: 30.0 ,
    motifRestitution:""
  }
  onSearch(){
    this.Search=true;
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
    saisirlemotif:"", 

  }



  ngOnInit(): void {
  
   
  }
  /*
  public SavePDF():void{  
    let content=this.content.nativeElement;  
    let doc = new jsPDF(); 
    let _elementHandlers =  
    {  
      '#editor':function(element:any,renderer:any){  
        return true;  
      }  
    };  
    doc.fromHTML(content.innerHTML,15,15,{  
  
      'width':190,  
      'elementHandlers':_elementHandlers  
    });  
  
    doc.save('test.pdf');  
  }  
   */
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
      saisirlemotif:"",
      
    }
    this.location.back();

      }


      payTransfertClicked(){
        this.payTransferButtonClicked=true;
        this.finishExtourne ++;
        if(this.transfert.etatTransfert == "a servir" && this.payTransferButtonClicked && this.finishExtourne > 1){
          this.transfert.etatTransfert = "extourned"
        }
;      }
RestituerClicked(){
      this.restituerClicked=true;
      this.finishRestitution ++;
      if(this.transfert.etatTransfert == "a servir" && this.restituerClicked && this.finishRestitution > 1){
        this.transfert.etatTransfert = "restitued"
      }
    }
  createAccountClicked(){
 
  }

  changeTansfertState(){
    if(this.transfert.etatTransfert == "a servir"){
      this.servirButton = "Deblock"
      this.transfert.etatTransfert = "Bloque"
    }else if(this.transfert.etatTransfert == "Bloque"){
      this.servirButton = "Block"
      this.transfert.etatTransfert = "a servir"
  }

  }}