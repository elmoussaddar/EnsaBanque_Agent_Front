import { MTransfer } from './../Models/MTransfer';
import { Beneficiare } from './../interfaces/Beneficiare';
import { beneficiaryResponseObject } from './../ResponseEntities/beneficiaryResponseObject';
import { prospectBeneficiare } from './../Models/prospectBeneficiare';
import { clientResponseObject } from './../ResponseEntities/clientResponseObject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from 'src/app/Models/client';
import { environment } from 'src/environments/environment';
import { transfertResponseObject } from '../ResponseEntities/transfertResponseObject';
import { MTransferResponseObject } from '../ResponseEntities/MTransferResponseObject';

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

private apiServerURL = environment.apiBaseURL;
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  auth_token=localStorage.getItem('token');

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

constructor(private http : HttpClient) { }

public getClients() : Observable<clientResponseObject[]>{
  return this.http.get<clientResponseObject[]>(`https://client-service-01.herokuapp.com/api/v0/client_service_api/clients`,this.httpOptions);
}

public getClientByPhoneNumber(phone : String) : Observable<clientResponseObject>{
  return this.http.get<clientResponseObject>(`https://client-service-01.herokuapp.com/api/v0/client_service_api/clients/${phone}`);
}

public getClientByCIN(CIN : String) : Observable<clientResponseObject>{
  return this.http.get<clientResponseObject>(`https://client-service-01.herokuapp.com/api/v0/client_service_api/clients/${CIN}?cin`,this.httpOptions);
}



public addClient(client : Client) : Observable<Client>{
  return this.http.post<Client>("https://client-service-01.herokuapp.com/api/v0/client_service_api/clients",client);
}

public updateClient(client : clientResponseObject) : Observable<clientResponseObject>{
  return this.http.put<clientResponseObject>(`https://client-service-01.herokuapp.com/api/v0/client_service_api/client/update`,client);
}


public saveAccount(id:number, balence: number):Observable<Client>{
  return this.http.post<Client>(`http://localhost:8090/account/${id}`,balence);
}

public getTransfertInfo(transfertRef : string):Observable<transfertResponseObject>{

  return this.http.get<transfertResponseObject>(`https://transfert-service-1.herokuapp.com/api/v0/transfer_service_api/UTransfer/${transfertRef}`,this.httpOptions);
}


public getBeneficiairiesPerClient(clientCIN : String) : Observable<Array<beneficiaryResponseObject>>{

  return this.http.get<Array<beneficiaryResponseObject>>(`http://clientservice-env.eba-dak2nkgp.us-east-1.elasticbeanstalk.com/api/v0/client_service_api/clients/${clientCIN}/benificiares`,this.httpOptions);

}

public addBeneficiairieToClient(beneficiairieObject :prospectBeneficiare, clientCIN : String ):Observable<any>{

  return this.http.post(`https://client-service-01.herokuapp.com/api/v0/client_service_api/clients/${clientCIN}/addNewBenif`,beneficiairieObject,this.httpOptions);
}

public getConfirmationOfFondAvailability(clientCIN :string, amount:Number):Observable<String>{

  return this.http.get<String>(`https://client-service-01.herokuapp.com/api/v0/client_service_api/clients/${clientCIN}/${amount}?verify`,this.httpOptions);
}

public registerTransfert(transfertObject:MTransfer):Observable<Number>{
  return this.http.post<Number>("https://transfert-service-1.herokuapp.com/api/v0/transfer_service/mTransfer/createTransfer/agent",transfertObject,this.httpOptions)

}

public updateTransfert(transfertObject:MTransferResponseObject):Observable<MTransferResponseObject>{
  return this.http.post<MTransferResponseObject>("jssmsms",transfertObject,this.httpOptions);

}

public getListTransferts():Observable<MTransferResponseObject[]>{

  return this.http.get<MTransferResponseObject[]>("jsjmskmss");

}

public sendOTP(clientPhoneNumber : String) :Observable<any>{
  return this.http.post("hshss",{clientPhoneNumber});
}

public verifyOTP(clientPhoneNumber : String,codeOTP:Number) :Observable<Boolean>{
  return this.http.post<Boolean>("hshss",{clientPhoneNumber});
}

}