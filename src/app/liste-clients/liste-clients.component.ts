import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/client';
import { clientResponseObject } from '../ResponseEntities/clientResponseObject';
import { ClientServicesService } from '../_services/client-services.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {
  public updateClient: clientResponseObject | undefined;
  public deleteClient: clientResponseObject = new clientResponseObject();
  public clientChoosed : clientResponseObject = new clientResponseObject();
  public clients: clientResponseObject[] = /* [] */ [
 
    {
      firstName : "FAYA",
      lastName : "Frederic",
      password : "dqfberbreqg",
      birthday : new Date("27-06-2001"),
      email : "fredericfaya@gmail.com",
      phoneNumber : "0638743853",
      address : "some where some where",
      city : "Marrakech",
      zip_code : 40000,
      cinNumber : "EB2912??",
      identity_paper_type : "Passeport",
      gender : "Male",
      id : 0,
      username : "fred001",
      country : "Morroco",
      accounts :[],
    },
    {
      firstName : "faya",
      lastName : "fred",
      password : "dqfberbreqg",
      birthday : new Date("27-06-2001"),
      email : "fredericfaya@gmail.com",
      phoneNumber : "0638743853",
      address : "some where some where",
      city : "Marrakech",
      zip_code : 40000,
      cinNumber : "EB2912??",
      identity_paper_type : "Passeport",
      gender : "Male",
      id : 0,
      username : "fred001",
      country : "Morroco",
      accounts:[],
    },
    {
      firstName : "faya",
      lastName : "fred",
      password : "dqfberbreqg",
      birthday : new Date("27-06-2001"),
      email : "fredericfaya@gmail.com",
      phoneNumber : "0638743853",
      address : "some where some where",
      city : "Marrakech",
      zip_code : 40000,
      cinNumber : "EB2912??",
      identity_paper_type : "Passeport",
      gender : "Male",
      id : 0,
      username : "fred001",
      country : "Morroco",
      accounts:[],


    },
    {
      firstName : "faya",
      lastName : "fred",
      password : "dqfberbreqg",
      birthday : new Date("27-06-2001"),
      email : "fredericfaya@gmail.com",
      phoneNumber : "0638743853",
      address : "some where some where",
      city : "Marrakech",
      zip_code : 40000,
      cinNumber : "EB2912??",
      identity_paper_type : "Passeport",
      gender : "Male",
      id : 0,
      username : "fred001",
      country : "Morroco",
      accounts:[],

    },
 
  ];

  constructor(private clientService : ClientServicesService) { }

  public getClients() : void{
    this.clientService.getClients().subscribe(
      (response : clientResponseObject[]) => {
        this.clients = response;
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onUpdateClient(client : clientResponseObject): void {
    this.clientService.updateClient(client).subscribe(
      (response: Client) => {
        console.log(response);
        this.getClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteClient(client: clientResponseObject): void {
    this.clientService.deleteClient(client).subscribe(
      (response: void) => {
        console.log(response);
        this.getClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchClient(key: string): void {
    const results: clientResponseObject[] = [];
    for (const client of this.clients) {
      if (client.username.toLowerCase().indexOf(key.toLowerCase()) !== -1
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
      button.setAttribute('data-bs-target', '#infosClientModal');
    }
    if (mode === 'update') {
      this.updateClient = client;
      button.setAttribute('data-bs-target', '#updateClientModal');
    }
    if (mode === 'delete') {
      this.deleteClient = client;
      button.setAttribute('data-bs-target', '#deleteClientModal');
    }
    container?.appendChild(button);
    button.click();
  }

  ngOnInit(): void {
    this.getClients();
  }

}


