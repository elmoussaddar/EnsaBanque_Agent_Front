import { Transfert } from './../interfaces/Transfert';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-list-transfert',
  templateUrl: './list-transfert.component.html',
  styleUrls: ['./list-transfert.component.css']
})
export class ListTransfertComponent implements OnInit {

  transfert:Transfert={
    idAgent:4,
    etatTransfert:"a servire",
    idTransfert:23,
    montantTransfert:800.0,
    dateEmissionTransfert:new Date(),
    nomBeneficiere:"ahmed",
    prenomBeneficiere:"el moussaddar",
    nomSender:"abdelmounim",
    prenomSender:"el moussaddar",
    refTransfert:"HG349865935"
  }
  constructor(private router: Router, private tokenStorage:TokenStorageService) {}
  ngOnInit(): void {

     
    }

    ViewDetailsClicked(idTransfert:number){

      this.router.navigate(['agentHome/transfertDetails']);
      console.log("clicked");
    }

}
