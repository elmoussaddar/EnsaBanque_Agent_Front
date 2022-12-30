import { Agent } from './../Models/agent';
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

  public agent:Agent = new Agent();
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public saveAgentData(clientForm: NgForm){
    this.router.navigate(['allAgents']);
  }
}
