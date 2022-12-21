import { Component, OnInit } from '@angular/core';
import { Client } from '../Models/client';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  public client:Client = new Client();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public saveClientData(clientForm: NgForm){
    this.router.navigate(['clientHome/liste-clients']);
  }
}
