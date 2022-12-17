import { Client } from './../interfaces/Client';
import { CreatebankAccountClientRequest } from './../RequestEntities/CreateBankAccountClientRequest';
import { ClientService } from './../_services/Client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.css']
})
export class CreateAccountFormComponent implements OnInit {
  
  constructor(private router: Router, private tokenStorage:TokenStorageService,private clientService :ClientService) { }

  numTel= window.sessionStorage.getItem("username");
  accountType: string="";
 
  createBankAccountRequest:CreatebankAccountClientRequest;
   
client:Client={
  email:"",
  firstAuth:false,
  id_user:0,
  nom:"",
   numTel:"",
   password:"",
   prenom:"",
   role:"",
   username:"",
   compte:{
     comptename:"",
     rib:"",
     solde:0.0,
     typeCompte:"",
   }
};
  accountTypes:String[]=[
    "Compte 200",
    "Compte 5 000",
    "Comte 20 000",
  ];


  ngOnInit(): void {
   
   /* if(this.checkAccountExists){
      this.router.navigate(['/clientHome/profile']);
    }
*/
   



   
  }

  createAccountClicked(){

    var e = (document.getElementById("AccountTType")) as HTMLSelectElement;
    var selectedIndex = e.selectedIndex;
    var option = e.options[selectedIndex];
    var selectedValue = (<HTMLOptionElement>option).value;
  
  
    this.createBankAccountRequest={
      numTel:"",
      typecompte:selectedValue,
    }
    console.log(this.createBankAccountRequest);


 
    
  }

 
}
