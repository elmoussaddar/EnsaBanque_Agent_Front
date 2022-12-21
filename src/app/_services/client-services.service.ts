import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from 'src/app/Models/client';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

private apiServerURL = environment.apiBaseURL;
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  auth_token=localStorage.getItem('token');

constructor(private http : HttpClient) { }

public getClients() : Observable<Client[]>{
  return this.http.get<Client[]>(`${this.apiServerURL}/client/getAll`);
}

public getClientById(clientID : String) : Observable<Client>{
  return this.http.get<Client>(`${this.apiServerURL}/client/${clientID}`);
}

public addClient(client : Client,idAgent: number) : Observable<Client>{
  return this.http.post<Client>(`${this.apiServerURL}/client/create/${idAgent}`,client);
}

public updateClient(client : Client) : Observable<Client>{
  return this.http.put<Client>(`${this.apiServerURL}/client/${client.id}`,client);
}

public deleteClient(client : Client) : Observable<void> {
  return this.http.delete<void>(`${this.apiServerURL}/client/${client.id}`);
}
public saveAccount(id:number, balence: number):Observable<Client>{
  return this.http.post<Client>(`http://localhost:8090/account/${id}`,balence);
}
}