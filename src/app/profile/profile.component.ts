import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { Client } from '../Models/client';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

const hasntChangedPassword=false;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  public client:Client = new Client();
  public profile_editable = true;
  public edit_text: String = "Edit";
  public edit_text_button: String = "btn btn-primary"
  numTel= window.sessionStorage.getItem("username");
  /*client:Client={
    id_user:0,
    email:"",
  firstAuth:false,
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

  };*/

  constructor(private router: Router, private tokenStorage:TokenStorageService) {}
  ngOnInit(): void {

  }

  public saveAgentData(clientForm: NgForm){
    this.profile_editable = !this.profile_editable;
    if(this.profile_editable){
      this.edit_text = "Edit";
      this.edit_text_button = "btn btn-primary";
      Swal.fire('Profile Updated successfully', 'Congratulations', 'success');
    }else{
      this.edit_text = "Save";
      this.edit_text_button = "btn btn-danger";
    }
  }

   
    
}


 

