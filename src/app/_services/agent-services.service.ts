import { MTransfer } from './../Models/MTransfer';
import { agentResponseObject } from './../ResponseEntities/agentResponseObject';
import { Agent } from './../Models/agent';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../Models/client';

@Injectable({
  providedIn: 'root'
})
export class AgentServicesService {


  private apiServerURL = environment.apiBaseURL;
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  auth_token=localStorage.getItem('token');
  
  constructor(private http : HttpClient) { }

  public addAgent(agent:Agent):Observable<Agent>{

    return this.http.post<Agent>("hhshs",{agent});

  }
  public getAgents() : Observable<agentResponseObject[]>{
    return this.http.get<agentResponseObject[]>(`${this.apiServerURL}/client/getAll`);
  }
  
  public getAgentById(clientID : String) : Observable<agentResponseObject>{
    return this.http.get<agentResponseObject>(`${this.apiServerURL}/client/${clientID}`);
  }
  

  
  public updateAgent(agent : agentResponseObject) : Observable<Client>{
    return this.http.put<agentResponseObject>(`${this.apiServerURL}/client/${agent.id}`,agent);
  }
  
 
 

  public getListTransferts():Observable<MTransfer[]>{

    return this.http.get<MTransfer[]>("jsjmskmss");

  }
}
