import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material'
import { DataSource } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { FormControl } from '@angular/forms';



export interface VEHICLE {  
  vehicleNumber: number; //Last four number is enough
  vehicleName: string; //Easily Identifieable name, which can be used for testing also
  dateOfEntry: string; 
  city:string;
  driverName: string;
  driverNumber: number;
  startingMeter: number; 
  endingMeter: number;
  totalToday: number;
 
}
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
  positionFilter = new FormControl();
  nameFilter = new FormControl();
  private filterValues = {  name: '' }

  filteredValues = {
     name: '', topFilter: false
  };


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  //public dataSource: any
  constructor() {
   }

  ngOnInit() {
    console.log("vehicle details loaded"); 
    this.nameFilter.valueChanges
      .subscribe(value => {
        this.filterValues['name'] = value
        this.dataSource.filter = JSON.stringify(this.filterValues)
      });
    this.dataSource.sort = this.sort;  
  }

 
}
