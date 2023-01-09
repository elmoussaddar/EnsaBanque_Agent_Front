import { MTransfer } from './../Models/MTransfer';
import { agentResponseObject } from './../ResponseEntities/agentResponseObject';
import { Agent } from './../Models/agent';
import { Observable, retry } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../Models/client';

@Injectable({
  providedIn: 'root'
})
export class AgentServicesService {


  private apiServerURL = environment.apiBaseURL;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'No-Auth': 'True'

    })
  };
  auth_token=localStorage.getItem('token');
  
  constructor(private http : HttpClient) { }

  public addAgent(agent:Agent):Observable<Agent>{


    return this.http.post<Agent>("https://agent-service-01.herokuapp.com/api/v0/agent_service_api/add_agent",agent);

  }


  public getAgentByEmail(email:string | undefined):Observable<agentResponseObject>{
    return this.http.get<agentResponseObject>(`https://agent-service-01.herokuapp.com/api/v0/agent_service_api/agent/me/${email}`);

  }



  public getAdminByEmail(email:string):Observable<any>{
    return this.http.get("");
  }
  public getAgents() : Observable<agentResponseObject[]>{
    return this.http.get<agentResponseObject[]>(`https://agent-service-01.herokuapp.com/api/v0/agent_service_api/agents`);
  }
  
  public getAgentById(clientID : String) : Observable<agentResponseObject>{
    return this.http.get<agentResponseObject>(`${this.apiServerURL}/client/${clientID}`);
  }
  

  
  public updateAgent(agent : agentResponseObject) : Observable<agentResponseObject>{
    return this.http.put<agentResponseObject>(`https://agent-service-01.herokuapp.com/api/v0/agent_service_api/agent/update/{id}`,agent);
  }
  
 
}
