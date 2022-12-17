import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-payment-facture',
  templateUrl: './payment-facture.component.html',
  styleUrls: ['./payment-facture.component.css']
})
export class PaymentFactureComponent implements OnInit {


  constructor(private router: Router, private tokenStorage:TokenStorageService) {}
  ngOnInit(): void {

     
    }

    checkAvailableBill(creancier:string){

      window.sessionStorage.setItem("creancier",creancier);
      this.router.navigate(['clientHome/listFacture']);
      console.log("clicked");
    }
}
