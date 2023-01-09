import { agentResponseObject } from './../ResponseEntities/agentResponseObject';
import { clientResponseObject } from './../ResponseEntities/clientResponseObject';
import { AgentServicesService } from './../_services/agent-services.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/client';
import { ClientServicesService } from '../_services/client-services.service';
import { Account } from '../Models/Account';
import { AccountStatus } from '../enum/AccountStatus';

@Component({
  selector: 'app-list-agents',
  templateUrl: './list-agents.component.html',
  styleUrls: ['./list-agents.component.css']
})
export class ListAgentsComponent implements OnInit {

  public updateClient: agentResponseObject = new agentResponseObject();
  public deleteClient: agentResponseObject = new agentResponseObject();
  public clientChoosed : agentResponseObject = new agentResponseObject();
  public agents: agentResponseObject[] ;
    
  

  constructor(private agentService : AgentServicesService) { }

  public getAgents() : void{
    this.agentService.getAgents().subscribe(
      (response : agentResponseObject[]) => {
        this.agents = response;
        console.log(response);
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onUpdateAgent(agent : agentResponseObject): void {

    console.log(agent);

    this.updateClient = {
      address:agent.address,
      agentAccounts: this.updateClient.agentAccounts,
      birthday:agent.birthday,
      cinNumber:agent.cinNumber,
      city:agent.city,
      country:agent.country,
      firstName:agent.firstName,
      lastName:agent.lastName,
      email:agent.email,
      gender:agent.gender,
      identity_paper_type:agent.identity_paper_type,
      id:this.updateClient.id,
      zip_code:agent.zip_code,
      phoneNumber:agent.phoneNumber,
      userName:agent.userName,
      password: this.updateClient.password

    }

    console.log(this.updateClient);
    this.agentService.updateAgent(this.updateClient).subscribe(
      (response) => {
        console.log(response);
        this.getAgents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    
  }


  public searchAgent(key: string): void {
    const results: agentResponseObject[] = [];
    for (const agent of this.agents) {
      if (agent.userName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || agent.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || agent.phoneNumber.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(agent);
      }
    }
    this.agents = results;
    if (results.length === 0 || !key) {
      this.getAgents();
    }
  }

  public onOpenModal(client : agentResponseObject, mode: string): void {
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
    this.getAgents();
  }

}
