import { ClientService } from './../_services/Client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtResponse } from '../interfaces/JwtResponse';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-client-login-form',
  templateUrl: './client-login-form.component.html',
  styleUrls: ['./client-login-form.component.css']
})
export class ClientLoginFormComponent implements OnInit {

  client={
    logIn:"",
    password:"",
  }

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  jwtResponse:JwtResponse;
  constructor(
     private router: Router,
     private authService: AuthService,
     private tokenStorage: TokenStorageService,
     private clientService: ClientService
     ) { }
     cheminImage:any ="../../assets/background.jpg";
  ngOnInit(): void {

    
   
      this.isLoggedIn = false;
    

  }

  submitClientLogInForm(form:any){
 this.router.navigate(['/clientHome/Home']);
    const { logIn, password } = this.client;

   
    
  }

      reloadPage(): void {
        window.location.reload();
      }
    }
 


