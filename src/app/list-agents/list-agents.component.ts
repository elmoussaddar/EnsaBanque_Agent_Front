import { clientResponseObject } from './../ResponseEntities/clientResponseObject';
import { AgentServicesService } from './../_services/agent-services.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/client';
import { agentResponseObject } from '../ResponseEntities/agentResponseObject';
import { ClientServicesService } from '../_services/client-services.service';

@Component({
  selector: 'app-list-agents',
  templateUrl: './list-agents.component.html',
  styleUrls: ['./list-agents.component.css']
})
export class ListAgentsComponent implements OnInit {

  public updateClient: clientResponseObject | undefined;
  public deleteClient: clientResponseObject = new clientResponseObject();
  public clientChoosed : clientResponseObject = new clientResponseObject();
  public clients: agentResponseObject[] = /* [] */ [
 
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
      identity_paper_number : "EB2912??",
      identity_paper_type : "Passeport",
      gender : "Male",
      id : 0,
      username : "fred001",
      country : "Morroco",
      balance : 1000000000
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
      identity_paper_number : "EB2912??",
      identity_paper_type : "Passeport",
      gender : "Male",
      id : 0,
      username : "fred001",
      country : "Morroco",
      balance : 1000000000
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
      identity_paper_number : "EB2912??",
      identity_paper_type : "Passeport",
      gender : "Male",
      id : 0,
      username : "fred001",
      country : "Morroco",
      balance : 1000000000
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
      identity_paper_number : "EB2912??",
      identity_paper_type : "Passeport",
      gender : "Male",
      id : 0,
      username : "fred001",
      country : "Morroco",
      balance : 1000000000
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
      identity_paper_number : "EB2912??",
      identity_paper_type : "Passeport",
      gender : "Male",
      id : 0,
      username : "fred001",
      country : "Morroco",
      balance : 1000000000
    }
  ];

  constructor(private agentService : AgentServicesService) { }

  public getClients() : void{
    this.agentService.getAgents().subscribe(
      (response : agentResponseObject[]) => {
        this.clients = response;
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onUpdateClient(agent : agentResponseObject): void {
    this.agentService.updateAgent(agent).subscribe(
      (response: Client) => {
        console.log(response);
        this.getClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteClient(agent: agentResponseObject): void {
    this.agentService.deleteAgent(agent).subscribe(
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
    const results: agentResponseObject[] = [];
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
