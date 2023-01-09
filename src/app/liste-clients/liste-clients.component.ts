import { Observable, Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Client } from '../Models/client';
import { clientResponseObject } from '../ResponseEntities/clientResponseObject';
import { ClientServicesService } from '../_services/client-services.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {
  public updateClient: clientResponseObject = new clientResponseObject();
  public deleteClient: clientResponseObject = new clientResponseObject();
  public clientChoosed : clientResponseObject = new clientResponseObject();
  public clients: clientResponseObject[];

  constructor(private clientService : ClientServicesService) { }

  public  getClients(){
   return  this.clientService.getClients().subscribe(
     (response: clientResponseObject[]) => {
       this.clients = response;
     },
     (error: HttpErrorResponse) => {
       alert(error.message);
     }
   )
  }

  public onUpdateClient(client : any): void {

    console.log(client);

    this.updateClient = {
      address:client.address,
      beneficiaries : this.updateClient.beneficiaries,
      accounts: this.updateClient.accounts,
      birthday:client.birthday,
      cinNumber:client.cinNumber,
      city:client.city,
      country:client.country,
      firstName:client.firstName,
      lastName:client.lastName,
      email:client.email,
      gender:client.gender,
      identity_paper_type:client.identity_paper_type,
      id:this.updateClient.id,
      zip_code:client.zip_code,
      phoneNumber:client.phoneNumber,
      password:this.updateClient.password,
      maxTransferAmountPerYear:this.updateClient.maxTransferAmountPerYear,
      userName:client.userName,


    }

    console.log(this.updateClient);
    this.clientService.updateClient( this.updateClient).subscribe(
      (response: clientResponseObject) => {
        console.log(response);
        Swal.fire(" Client information has been updated", "operation is successful",'success' ).then(() =>{
          this.getClients();

          location.reload();
        });
      },
      (error: HttpErrorResponse) => {
        Swal.fire(" the registration process encountred an error ", error.message,'error' ).then(()=>{
        });      
      }
    );
    
  }

 

  public searchClient(key: string): void {
    const results: clientResponseObject[] = [];
    for (const client of this.clients) {
      if (client.userName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || client.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || client.phoneNumber.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(client);
      }
    }
    this.clients = results;
    if (results.length === 0 || !key) {
      this.getClients();
    }
  }

  public onOpenModal(client : clientResponseObject, mode: string): void {
    const container = document.getElementById("main-container");
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'infos') {
      this.clientChoosed = client;
      console.log(this.clientChoosed);
      button.setAttribute('data-bs-target', '#infosClientModal');
    }
    if (mode === 'update') {
      this.updateClient = client;
      button.setAttribute('data-bs-target', '#updateClientModal');
    }
   
    container?.appendChild(button);
    button.click();
  }

  ngOnInit(): void {
    this.getClients();
  }

}


