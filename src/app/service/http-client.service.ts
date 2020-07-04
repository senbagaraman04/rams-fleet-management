import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {VEHICLE, DRIVER} from '../shared/formFields'
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  

  constructor( private httpClient: HttpClient) { }

 
  serverUrl: string = environment.baseURL;//"https://ramsbackend.herokuapp.com/api/"

  get(url: string): Observable<any> {
      return this.httpClient.get(this.serverUrl + url);
  }

  post(url: string, data: VEHICLE): Observable<any> {
      return this.httpClient.post(this.serverUrl + url, data);
  }

  put(url: string, data: VEHICLE): Observable<any> {
      return this.httpClient.put(this.serverUrl + url, data);
  }

  delete(url: string, data: VEHICLE): Observable<any> {
      return this.httpClient.delete(this.serverUrl + url, { params: { id: data.id + "" } });
  }

  getHeaderData() :  Observable<any>  {
    return this.httpClient.get(this.serverUrl + "getVehicleHeaderDetails")
  }


  postDriverData(url: string, data: DRIVER): Observable<any> {
    return this.httpClient.post(this.serverUrl + url, data);
 }

 getDriverData(url: string): Observable<any> {
  return this.httpClient.get(this.serverUrl + url);
}

deleteDriverData(url: string, data: DRIVER): Observable<any> {
  return this.httpClient.delete(this.serverUrl + url, { params: { id: data.id + "" } });
}

}
