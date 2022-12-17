import { VirementRequest } from './../RequestEntities/VirementRequest';
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TokenStorageService } from "../_services/token-storage.service";
import { ClientService } from '../_services/Client.service';

@Component({
    selector:'app-virement-form',
    templateUrl:'./virement-form.component.html'
})

 export class VirementFormComponent {
  
    virementRequest:VirementRequest={
      montant:0.0,
      ribDest:"",
      ribSrc:"demo rib",
    }

    showNotEnoughCredit:boolean = false;
    constructor(private router: Router, private tokenStorage:TokenStorageService,private clientService :ClientService) {}
    ngOnInit(): void {

      
      }

      effectuerVirementClicked(){

     
      }
}