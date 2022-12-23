import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Client } from '../Models/client';

@Component({
  selector: 'app-serve-client',
  templateUrl: './serve-client.component.html',
  styleUrls: ['./serve-client.component.css']
})
export class ServeClientComponent implements OnInit {
  public client:Client = new Client();
  search_ref:boolean = false;
  transfert_not_found:boolean = false;
  transfert_blocked:boolean = false;
  client_blist:boolean = false;
  s:string = "hello";
  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  searchRef(){
    this.search_ref = true;
    //this.transfert_not_found = true;
    //this.transfert_blocked = true;
    //this.client_blist = true;
    if(this.transfert_not_found){
      Swal.fire('Sorry\nTransfert not found', ':(', 'error');
    }else if(this.transfert_blocked){
      Swal.fire('Sorry\nThe transfert is blocked', ':(', 'error');
    }else if(this.client_blist){
      Swal.fire('Sorry\nThe receiver\n\n' + this.s + '\n\nis blacklisted', ':(', 'error');
    }
  }

}
