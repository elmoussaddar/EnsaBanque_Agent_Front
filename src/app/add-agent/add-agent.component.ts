import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from '../Models/client';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {

  public client:Client = new Client();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public saveAgentData(clientForm: NgForm){
    this.router.navigate(['allAgents']);
  }
}
