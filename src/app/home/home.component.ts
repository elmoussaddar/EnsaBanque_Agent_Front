import { KeycloakService } from 'keycloak-angular';
import { Account } from './../Models/Account';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../Models/agent';
import { AccountStatus } from '../enum/AccountStatus';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userProfile : any;
  user:Agent = {
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
    userName : "fred001",
    country : "Morroco",
   
  };
  userRoles: string | null;
  isAdmin: any;
  isAgent: any;

 
  constructor(private router: Router, private keycloakAngular: KeycloakService) { }

  ngOnInit(): void {

    this.userRoles = window.sessionStorage.getItem("userRoles");

    this.isAdmin = this.userRoles?.includes("ADMIN");
    this.isAgent = this.userRoles?.includes("AGENT");

  }

  goToProfile(){
    this.router.navigate(['/clientHome/profile']);
  }

  goToAddClient(){
    this.router.navigate(['/clientHome/addClient']);
  }

  goToGetClients(){
    this.router.navigate(['/clientHome/liste-clients']);
  }

  goToServeClients(){
    this.router.navigate(['/serveClient']);
  }

  goToGetAgents(){
    this.router.navigate(['/allAgents']);
  }

  goToAddAgent(){
    this.router.navigate(['/addAgent']);
  }

  goToTransfertList(){
    this.router.navigate(['/clientHome/listTransfert']);
  }


}
