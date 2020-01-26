import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material'
import { DataSource } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {VEHICLE} from '../../shared/vehicle';


// export interface VEHICLE {  
//   vehicleNumber: number; //Last four number is enough
//   vehicleName: string; //Easily Identifieable name, which can be used for testing also
//   dateOfEntry: string; 
//   city:string;
//   driverName: string;
//   driverNumber: number;
//   startingMeter: number; 
//   endingMeter: number;
//   totalToday: number; 
// }

const vehicle_data: VEHICLE[] = [
  {   
       vehicleNumber: 1001, 
       vehicleName: "Ace", 
       dateOfEntry: "12/12/12",
       city:'salem',
       driverName:"testDriver",
       driverNumber: 123454,
       startingMeter:10,
       endingMeter:100,
       totalToday: 0
  },   
  {   
    vehicleNumber: 100, 
    vehicleName: "Ace2", 
    dateOfEntry: "2/12/12",
    city:'salem',
    driverName:"testDriver",
    driverNumber: 123354,
    startingMeter:10,
    endingMeter:10,
    totalToday: 0
},   

];

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  //Display's the allowed column names
  displayedColumns: string[] = ['number', 'name', 'date', 'city', 'drivername','drivernumber','start','end','total'];
  dataSource = new MatTableDataSource(vehicle_data);
  showAlert : boolean


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  //public dataSource: any
  constructor( private dialog: MatDialog) {
    this.showAlert = false;
   }

  ngOnInit() {
    console.log("vehicle details loaded");     
    
    this.dataSource.sort = this.sort;  
  }


  alertMethod() {
    console.log("alert method clicked")
   this.showAlert = !this.showAlert;
    
  }


 

  
}
