import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/client';
import { ClientServicesService } from '../_services/client-services.service';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {
  public updateClient: Client | undefined;
  public deleteClient: Client = new Client();
  public clientChoosed : Client = new Client();
  public clients: Client[] = []; /*[
 
    {
      id : "gvhj",
      nom : "faya",
      prenom : "fred",
      password : "dqfberbreqg",
      naissance : new Date("27-06-2001"),
      email : "fsbsndbtd",
      telephone : "eqefafa",
      adresse : "eqefafa",
      ville : "eqefafa",
      codePostal : 446995,
      numCarteBancaire : "uhijzjejfzfjz",
      rib : "eqefafa",
      civilite : "eqefafa",
      cni : "eqefafa",
      solde : 64655959,
      produit : "eqefafa",
      is_new : true
    }
  ];*/

  constructor(private clientService : ClientServicesService) { }

  public getClients() : void{
    this.clientService.getClients().subscribe(
      (response : Client[]) => {
        this.clients = response;
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  public onUpdateClient(client : Client): void {
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

  public onDeleteClient(client: Client): void {
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
    const results: Client[] = [];
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

  public onOpenModal(client : Client, mode: string): void {
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


