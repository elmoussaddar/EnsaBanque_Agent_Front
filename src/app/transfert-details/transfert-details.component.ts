import { MTransfer } from './../Models/MTransfer';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Beneficiare } from '../interfaces/Beneficiare';
import { TokenStorageService } from '../_services/token-storage.service';
import { Location } from '@angular/common';
import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
//import  jsPDF from 'jspdf'; 
import jspdf from 'jspdf'; 
import * as jsPDF from 'jspdf';
import { Transfert } from '../Models/transfert';
import { TransferStatus } from '../enum/TransferStatus';


@Component({
  selector: 'app-transfert-details',
  templateUrl: './transfert-details.component.html',
  styleUrls: ['./transfert-details.component.css']
})
export class TransfertDetailsComponent implements OnInit {

  TransferStatus = TransferStatus;
  status: TransferStatus;
  @ViewChild('content') content:ElementRef;  
  constructor(private router: Router, private tokenStorage:TokenStorageService,private location:Location, ) { }
  payTransferButtonClicked:boolean=false;
  restituerClicked:boolean=false;
  finishRestitution:number=0;
  finishExtourne:number=0;
  Search=false;
  servirButton:String = "Block";
  titres=["M","Mme"];
  motifdeRestitution=["Reciever Erreur","Mauvais Montant","Autre"];
 public  transfert:MTransfer= new MTransfer();

  
  onSearch(){
    this.Search=true;
    
  }
  
  ngOnInit(): void {
  
   
  }
  goBack(){
    this.location.back();

      
    }
  payTransfertClicked(){
    this.payTransferButtonClicked=true;
    this.finishExtourne ++;
    
    if(this.transfert.transfers[0].status == TransferStatus.ASERVIR && this.payTransferButtonClicked && this.finishExtourne > 1){

      this.transfert.transfers[0].status  = TransferStatus.EXTOURNE

    }
;      }
RestituerClicked(){
  this.restituerClicked=true;
  this.finishRestitution ++;
  if(this.transfert.transfers[0].status  == TransferStatus.ASERVIR  && this.restituerClicked && this.finishRestitution > 1){
    this.transfert.transfers[0].status  = TransferStatus.RESTITUE
  }
}
createAccountClicked(){

}

changeTansfertState(){
if(this.transfert.transfers[0].status  == TransferStatus.ASERVIR){
  this.servirButton = "Deblock"
  this.transfert.transfers[0].status  = TransferStatus.BLOCKED
}else if(this.transfert.transfers[0].status  == TransferStatus.BLOCKED){
  this.servirButton = "Block"
  this.transfert.transfers[0].status  = TransferStatus.ASERVIR
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
  }
}