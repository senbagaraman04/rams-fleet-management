import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {VEHICLE} from '../shared/vehicle'

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private httpClient: HttpClient) { }

  getVehicles()
  {
    console.log(this.httpClient.get<VEHICLE>('http://localhost:8080/employees'));
      return this.httpClient.get<VEHICLE>('http://localhost:8080/employees');
    
  }


}
