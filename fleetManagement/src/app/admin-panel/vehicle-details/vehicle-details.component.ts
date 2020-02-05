import { Component, OnInit, ViewChild, TemplateRef, ɵConsole } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material'
import { DataSource } from '@angular/cdk/table';
import { NgModule } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {VEHICLE} from '../../shared/vehicle';

import { HttpClientService } from '../../service/http-client.service';
import { validateHorizontalPosition } from '@angular/cdk/overlay';


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
// export class VehicleDetailsComponent implements OnInit {

//   //Display's the allowed column names
//   displayedColumns: string[] = ['vehicleNumber', 'name', 'date', 'cityOfTravel', 'drivername','drivernumber','start','end','total'];
  
//   showAlert : boolean
//   vehicle_data: any;
//   dataSource = new MatTableDataSource(this.vehicle_data);
//   @ViewChild(MatSort, {static: true}) sort: MatSort;
  
//   constructor( 
//           private dialog: MatDialog,
//           private httpClientService:HttpClientService 
//            ) 
//   {
//     this.showAlert = false;
//    }

//   ngOnInit() {
//     console.log("vehicle details loaded");     
    

//    this.httpClientService.getVehicles().subscribe(response => this.handleResponse(response));
   
//     this.dataSource.sort = this.sort;  
//   }


//   handleResponse(response): void {
//     console.log("Printing from handleresponse");
//     console.log(response);
//      this.vehicle_data = response;
//      this.dataSource = new MatTableDataSource(this.vehicle_data);
//      console.log(this.vehicle_data);
//      this.dataSource.sort = this.sort;

//   }
 

//   alertMethod() {
//     console.log("alert method clicked")
//    this.showAlert = !this.showAlert;
    
//   }


 

  
// }

export class VehicleDetailsComponent implements OnInit {

  //Display's the allowed column names
  displayedColumns: string[] = ['vehicleNumber', 'vehicleName', 'date', 'cityOfTravel', 'drivername','drivernumber','start','end','total','action'];
  
  showAlert : boolean
  vehicle_data: any;
  dataSource = new MatTableDataSource(this.vehicle_data);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('f', {static:true}) ngForm;
  
  constructor( 
          private dialog: MatDialog,
          private httpClientService:HttpClientService,
          private formBuilder: FormBuilder
           ) 
  {
    this.showAlert = false;
   }

  ngOnInit() {
    console.log("vehicle details loaded");     
    this.createForm();
    this.getData();

   
    this.dataSource.sort = this.sort;  
  }


  url: string = 'student';
  usersList: Array<VEHICLE>
  student: VEHICLE = undefined
  myForm: FormGroup;
 

  createForm() {
    this.myForm = this.formBuilder.group({
      vehicleName: new FormControl(this.student ? this.student.vehicleName: '', Validators.required),
      cityOfTravel: new FormControl(this.student ? this.student.cityOfTravel : '', Validators.required),
      vehicleNumber: new FormControl(this.student ? this.student.vehicleNumber : '', Validators.required),
      dateStart: new FormControl(this.student? this.student.dateStart : '',Validators.required),
      driverName: new FormControl(this.student? this.student.driverName : '',Validators.required),
      driverNumber: new FormControl(this.student? this.student.driverNumber : '',Validators.required),
      startingMeter: new FormControl(this.student? this.student.startingMeter : '',Validators.required),
      endingMeter: new FormControl(this.student? this.student.endingMeter : ''),
      totalToday: new FormControl(this.student? this.myForm.controls['endingMeter'].value() - this.myForm.controls['startingMeter'].value() : '')
    });
  }

 submitForm(data) {
   console.log(data)
     if (data.valid)
      this.addStudent(data.value)
  }

  getData(): void {
    this.httpClientService.get(this.url).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res));
      this.usersList = response.data;
      this.dataSource =new MatTableDataSource(this.usersList);
    })
  }

 addStudent(student: VEHICLE): void {
     if (this.student)
      student.id = this.student.id
    this.httpClientService.post(this.url, student).subscribe(res => {    
      let response = JSON.parse(JSON.stringify(res))    
      this.getData();
      this.myForm.reset();
     this.showAlert = false;
      this.student = undefined
    }, error => {
    })
  }
  cancelForm() {
    this.showAlert = false;
    this.myForm.reset();
  }

  clearForm() {
    this.myForm.reset();
  }


  edit(student: VEHICLE): void {
    console.log(student)
    this.showAlert = true;
    this.student = student
    this.myForm.controls['vehicleNumber'].setValue(this.student.vehicleNumber)
    this.myForm.controls['vehicleName'].setValue(this.student.vehicleName)
    this.myForm.controls['cityOfTravel'].setValue(this.student.cityOfTravel)
    this.myForm.controls['dateStart'].setValue(this.student.dateStart)
    this.myForm.controls['driverName'].setValue(this.student.driverName)
    this.myForm.controls['driverNumber'].setValue(this.student.driverNumber)
    this.myForm.controls['startingMeter'].setValue(this.student.startingMeter)
    this.myForm.controls['endingMeter'].setValue(this.student.endingMeter)
    this.myForm.controls['totalMeter'].setValue(this.student.totalMeter)
  
  }

  delete(student: VEHICLE): void {
    this.httpClientService.delete(this.url, student).subscribe(res => {
      let data = JSON.parse(JSON.stringify(res))
      this.getData()
    }, error => {
    })
  }

  handleResponse(response): void {
     this.vehicle_data = response;
     this.dataSource = new MatTableDataSource(this.vehicle_data);
     this.dataSource.sort = this.sort;

  }
 

  alertMethod() {
   this.showAlert = !this.showAlert;    
  }


 

  
}
