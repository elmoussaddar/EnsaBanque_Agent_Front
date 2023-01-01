import { KeycloakService } from 'keycloak-angular';
import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as Keycloak from 'keycloak-js';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
   
    doesHaveaccount:Boolean=false;
    isLoggedIn:Boolean=false;
    isAdmin:Boolean | undefined = false;
    userRoles : String | null;
    isAgent : Boolean | undefined = false;

    constructor(private router: Router, private tokenStorage:TokenStorageService,private  keycloakAngular : KeycloakService) {}

    numTel= window.sessionStorage.getItem("username");
    ngOnInit(): void {

        this.isLoggedIn = true;
        this.isAdmin = true;

        this.userRoles = window.sessionStorage.getItem("userRoles");

        this.isAdmin = this.userRoles?.includes("ADMIN");
        this.isAgent = this.userRoles?.includes("AGENT");

    }
    isExpanded: boolean=false;
    onLogout() {

         this.keycloakAngular.logout();  
    }
}
