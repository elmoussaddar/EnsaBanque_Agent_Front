import Swal from 'sweetalert2';
import { ClientServicesService } from './../_services/client-services.service';
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
  constructor(private router: Router,private clientServices : ClientServicesService) { }

  ngOnInit(): void {
  }
  public saveClientData(clientForm: NgForm){

  this.clientServices.addClient(this.client).subscribe(data =>{
    console.log(data);
    console.log("user registred !!!!!");

    Swal.fire(" this client has been registered", "operation is successful",'success' ).then(() =>{
      location.reload();
    });
   },
   error => {
    console.log(error);
    // handle the error here
    Swal.fire(" the registration process encountred an error ", error.message,'error' ).then(()=>{
      location.reload();

    });

  })



  

   console.log(this.client);
  }
}
