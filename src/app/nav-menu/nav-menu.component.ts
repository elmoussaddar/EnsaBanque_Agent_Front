import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
   
    doesHaveaccount:Boolean=false;
    isLoggedIn:Boolean=false;
    isAdmin:boolean = false;

    constructor(private router: Router, private tokenStorage:TokenStorageService) {}

    numTel= window.sessionStorage.getItem("username");
    ngOnInit(): void {
        this.isLoggedIn = true;
        this.isAdmin = true;
    }
    isExpanded: boolean=false;
    onLogout() {
        this.router.navigate(['/login']);
        this.tokenStorage.signOut();
        //window.location.reload();    
    }
}
