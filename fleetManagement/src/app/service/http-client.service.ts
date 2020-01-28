import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {VEHICLE} from '../shared/vehicle'

import { environment } from "../../environments/environment";
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private httpClient: HttpClient) { }

 
  serverUrl: string = "http://localhost:8080/api/"

  get(url: string): Observable<any> {
    console.log("Printing from1");
    console.log(url)
    console.log(this.httpClient.get(this.serverUrl + url));
      return this.httpClient.get(this.serverUrl + url);
  }

  post(url: string, data: VEHICLE): Observable<any> {
    console.log("Printing from33");
      return this.httpClient.post(this.serverUrl + url, data);
  }

  put(url: string, data: VEHICLE): Observable<any> {
    console.log("Printing from3");
      return this.httpClient.put(this.serverUrl + url, data);
  }

  delete(url: string, data: VEHICLE): Observable<any> {
    console.log("Printing from2");
      return this.httpClient.delete(this.serverUrl + url, { params: { id: data.id + "" } });
  }


}
