import { Agent } from './../Models/agent';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentServicesService } from '../_services/agent-services.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {

  public agent:Agent = new Agent();
  constructor(private router: Router, private agentServices : AgentServicesService) { }

  ngOnInit(): void {
  }

  public saveAgentData(clientForm: NgForm){

    this.agentServices.addAgent(this.agent).subscribe(data => {
      console.log(data);
      Swal.fire(" Agent Account has has been created", "operation is successful",'success' ).then(() =>{
        location.reload();
      });

    },
    (error: HttpErrorResponse) => {
      Swal.fire(" the registration process encountred an error ", error.message,'error' ).then(()=>{
      });      
    })

  
  }
}
