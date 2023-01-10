import { agentResponseObject } from './../ResponseEntities/agentResponseObject';
import { AgentServicesService } from './../_services/agent-services.service';
import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Client } from '../Models/client';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ClientServicesService } from '../_services/client-services.service';

const hasntChangedPassword=false;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  public client:agentResponseObject = new agentResponseObject();
  public profile_editable = true;
  public edit_text: String = "Edit";
  public edit_text_button: String = "btn btn-primary";
  email:string;;
  userRoles: string | null;
  isAdmin: any;
  isAgent: Boolean | undefined;
 

  constructor(private router: Router, private agentServices : AgentServicesService,) {}
  ngOnInit(): void {

 
    this.userRoles = window.sessionStorage.getItem("userRoles");

    let emailprp : any= sessionStorage.getItem("userEmail");
    this.email = JSON.parse(emailprp);
    console.log(this.email);
    this.isAdmin = this.userRoles?.includes("ADMIN");
    this.isAgent = this.userRoles?.includes("AGENT");

    console.log(this.isAgent);

    if(this.isAgent){
      this.agentServices.getAgentByEmail(this.email).subscribe(agent => {
        this.client = agent;
        localStorage.setItem("agentId",agent.id.toString());
        console.log(agent);

      })

    }else if(this.isAdmin){
      this.agentServices.getAdminByEmail(this.email).subscribe((res) => {
        this.client = res;

      })

    }


  }

  public saveAgentData(clientForm: NgForm){
    this.profile_editable = !this.profile_editable;
    if(this.profile_editable){
      this.edit_text = "Edit";
      this.edit_text_button = "btn btn-primary";

      this.agentServices.updateAgent(this.client).subscribe(data =>{
        console.log(data);
        Swal.fire('Profile Updated successfully', 'Congratulations', 'success');

      },
      error => {
        Swal.fire("Profile wasn't updated !", error.message, 'error');

      })
      
    }else{
      this.edit_text = "Save";
      this.edit_text_button = "btn btn-danger";
    }
  }

   
    
}


 

