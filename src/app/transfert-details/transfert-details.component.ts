import { MTransferResponseObject } from './../ResponseEntities/MTransferResponseObject';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Location } from '@angular/common';
import { TransferStatus } from '../enum/TransferStatus';
import { ClientServicesService } from '../_services/client-services.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-transfert-details',
  templateUrl: './transfert-details.component.html',
  styleUrls: ['./transfert-details.component.css']
})
export class TransfertDetailsComponent implements OnInit {

  TransferStatus = TransferStatus;
  status: TransferStatus;
  isAdmin:Boolean | undefined = false;
  userRoles : String | null;
  isAgent : Boolean | undefined = false;


  @ViewChild('content') content:ElementRef;  
  constructor(private router: Router, private services : ClientServicesService,private location:Location,private route: ActivatedRoute ) { }
  payTransferButtonClicked:boolean=false;
  restituerClicked:boolean=false;
  finishRestitution:number=0;
  finishExtourne:number=0;
  Search=false;
  servirButton:String = "Block";
  titres=["M","Mme"];
  motifdeRestitution=["Reciever Erreur","Mauvais Montant","Autre"];
 public  transfer:MTransferResponseObject= new MTransferResponseObject();

  
  onSearch(){
    this.Search=true;
    
  }
  
  ngOnInit(): void {
    this.isAdmin = true;

    this.userRoles = window.sessionStorage.getItem("userRoles");

    this.isAdmin = this.userRoles?.includes("ADMIN");
    this.isAgent = this.userRoles?.includes("AGENT");

    this.route.queryParams.subscribe(params => {
      this.transfer = JSON.parse(params['object']);
    });
   
  }
  goBack(){
    this.location.back();

      
    }
  payTransfertClicked(){
    this.payTransferButtonClicked=true;
    this.finishExtourne ++;
    
    if(this.transfer.transfers[0].status == TransferStatus.ASERVIR && this.payTransferButtonClicked && this.finishExtourne > 1){

      this.transfer.transfers[0].status  = TransferStatus.EXTOURNE

    }

    if (window.confirm('Are you sure you want to pay this transefer?')) {
      this.services.updateTransfert(this.transfer).subscribe(data => {
        this.showSweetAlertMessage('Transfer Payed !','Well Done');
      });
    }
;      }
RestituerClicked(){
  this.restituerClicked=true;
  this.finishRestitution ++;
  if(this.transfer.transfers[0].status  == TransferStatus.ASERVIR  && this.restituerClicked && this.finishRestitution > 1){
    this.transfer.transfers[0].status  = TransferStatus.RESTITUE
  }
  if (window.confirm('Are you sure you want to take this action ?')) {
    this.services.updateTransfert(this.transfer).subscribe(data => {
      this.showSweetAlertMessage('Transfer State Changed !','Restitution was successful');
    });
  }
}
createAccountClicked(){

}

changeTansfertState(){
if(this.transfer.transfers[0].status  == TransferStatus.ASERVIR){
  this.servirButton = "Deblock"
  this.transfer.transfers[0].status  = TransferStatus.BLOCKED
}else if(this.transfer.transfers[0].status  == TransferStatus.BLOCKED){
  this.servirButton = "Block"
  this.transfer.transfers[0].status  = TransferStatus.ASERVIR
}
if (window.confirm('Are you sure you want to take this action ?')) {
  this.services.updateTransfert(this.transfer).subscribe(data => {
    this.showSweetAlertMessage('Transfer State Changed !','request was successful');
  });
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

  showSweetAlertMessage(title : string, html:string) {
    console.log('showSweetAlertMessage triggered');
    Swal.fire(title, html, 'success');
    
    }
   
}


