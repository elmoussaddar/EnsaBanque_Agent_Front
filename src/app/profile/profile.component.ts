import { Client } from './../interfaces/Client';
import { ClientService } from './../_services/Client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

const hasntChangedPassword=false;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  numTel= window.sessionStorage.getItem("username");
  client:Client={
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

  };

  constructor(private router: Router, private tokenStorage:TokenStorageService,private clientService :ClientService) {}
  ngOnInit(): void {

    } 

   
    
    }


 

