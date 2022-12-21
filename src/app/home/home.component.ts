import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:string|null = '';
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProfile(){
    this.router.navigate(['/clientHome/profile']);
  }

  goToAddClient(){
    this.router.navigate(['/clientHome/addClient']);
  }

  goToGetClients(){
    this.router.navigate(['/clientHome/liste-clients']);
  }
}
