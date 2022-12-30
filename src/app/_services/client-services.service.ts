import { prospectBeneficiare } from './../Models/prospectBeneficiare';
import { clientResponseObject } from './../ResponseEntities/clientResponseObject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from 'src/app/Models/client';
import { environment } from 'src/environments/environment';
import { transfertResponseObject } from '../ResponseEntities/transfertResponseObject';

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

private apiServerURL = environment.apiBaseURL;
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  auth_token=localStorage.getItem('token');

constructor(private http : HttpClient) { }

public getClients() : Observable<clientResponseObject[]>{
  return this.http.get<clientResponseObject[]>(`${this.apiServerURL}/client/getAll`);
}

public getClientByPhoneNumber(phone : String) : Observable<clientResponseObject>{
  return this.http.get<clientResponseObject>(`${this.apiServerURL}/client/${phone}`);
}



public addClient(client : Client,idAgent: number) : Observable<Client>{
  return this.http.post<Client>(`${this.apiServerURL}/client/create/${idAgent}`,client);
}

public updateClient(client : clientResponseObject) : Observable<clientResponseObject>{
  return this.http.put<clientResponseObject>(`${this.apiServerURL}/client/${client.id}`,client);
}


public saveAccount(id:number, balence: number):Observable<Client>{
  return this.http.post<Client>(`http://localhost:8090/account/${id}`,balence);
}

public getTransfertInfo(transfertRef : string):Observable<transfertResponseObject>{

  return this.http.get<transfertResponseObject>("shdjjjdjd");
}

public addBeneficiaire(lead :prospectBeneficiare, clientCIN:String ) : Observable<string>{

  return this.http.post<string>(`/////${clientCIN}`,{lead});
}
}