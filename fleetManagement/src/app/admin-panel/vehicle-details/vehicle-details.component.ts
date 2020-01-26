import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material'
import { DataSource } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {VEHICLE} from '../../shared/vehicle';

import { HttpClientService } from '../../service/http-client.service';


// const vehicle_data: VEHICLE[] = [
//   {   
//        vehicleNumber: 1001, 
//        vehicleName: "Ace", 
//        dateOfEntry: "12/12/12",
//        city:'salem',
//        driverName:"testDriver",
//        driverNumber: 123454,
//        startingMeter:10,
//        endingMeter:100,
//        totalToday: 0
//   },   
//   {   
//     vehicleNumber: 100, 
//     vehicleName: "Ace2", 
//     dateOfEntry: "2/12/12",
//     city:'salem',
//     driverName:"testDriver",
//     driverNumber: 123354,
//     startingMeter:10,
//     endingMeter:10,
//     totalToday: 0
// },   

// ];

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  //Display's the allowed column names
  displayedColumns: string[] = ['number', 'name', 'date', 'city', 'drivername','drivernumber','start','end','total'];
  
  showAlert : boolean
  vehicle_data: any;
  dataSource = new MatTableDataSource(this.vehicle_data);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor( 
          private dialog: MatDialog,
          private httpClientService:HttpClientService 
           ) 
  {
    this.showAlert = false;
   }

  ngOnInit() {
    console.log("vehicle details loaded");     
    

   this.httpClientService.getVehicles().subscribe(response => this.handleResponse(response));
   
    this.dataSource.sort = this.sort;  
  }

  
  handleResponse(response: VEHICLE): void {
    console.log("Printing from handleresponse");
    console.log(response);
     this.vehicle_data = response;
     this.dataSource = new MatTableDataSource(this.vehicle_data);
     console.log(this.vehicle_data);

  }


  alertMethod() {
    console.log("alert method clicked")
   this.showAlert = !this.showAlert;
    
  }


 

  
}
