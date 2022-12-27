import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../Models/agent';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
    identity_paper_number : "EB2912??",
    identity_paper_type : "Passeport",
    gender : "Male",
    username : "fred001",
    country : "Morroco",
    balance : 1000000000
  };

  isAdmin:boolean;
 
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isAdmin = true;
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
