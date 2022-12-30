import { MTransfer } from './../Models/MTransfer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-list-transfert',
  templateUrl: './list-transfert.component.html',
  styleUrls: ['./list-transfert.component.css']
})
export class ListTransfertComponent implements OnInit {

  transfert:MTransfer= new MTransfer();
  constructor(private router: Router, private tokenStorage:TokenStorageService) {}
  ngOnInit(): void {

     
    }

    ViewDetailsClicked(idTransfert:Number){

      this.router.navigate(['clientHome/transfertDetails']);
      console.log("clicked");
    }

}
