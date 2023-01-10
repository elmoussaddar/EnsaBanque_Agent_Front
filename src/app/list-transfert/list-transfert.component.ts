import { ClientServicesService } from './../_services/client-services.service';
import { MTransferResponseObject } from './../ResponseEntities/MTransferResponseObject';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-transfert',
  templateUrl: './list-transfert.component.html',
  styleUrls: ['./list-transfert.component.css']
})
export class ListTransfertComponent implements OnInit {

  transferts:MTransferResponseObject[]=[] ;
  constructor(private router: Router, private services : ClientServicesService) {}
  ngOnInit(): void {

    this.services.getListTransferts().subscribe(response=>{
      this.transferts = response;
    })

     
    }

    ViewDetailsClicked(transfertId:Number | null){

      let transfertObject : MTransferResponseObject | undefined = this.transferts.find(transfert=>transfert.transfers[0].id == transfertId );

      if( transfertObject != null && transfertObject != undefined){
        this.router.navigate(['clientHome/transfertDetails'],{
          queryParams:{
            object: JSON.stringify(transfertObject),
          }
        });
      }
      
      console.log("clicked");
    }

}
