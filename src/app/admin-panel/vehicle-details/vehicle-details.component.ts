import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import {MatSort} from '@angular/material/sort';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

import {VEHICLE} from '../../shared/formFields';

import { HttpClientService } from '../../service/http-client.service';
import {  Subscription} from 'rxjs';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { LocalRowDataStorageService } from 'src/app/service/local-data-storage.service';
 

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})

export class VehicleDetailsComponent implements OnInit {


  constructor( private dialog: MatDialog,
               private httpClientService: HttpClientService,
               private formBuilder: FormBuilder,
               private router: Router,
               private rowDataService: LocalRowDataStorageService
              ) {
    this.showAlert = false;
  }

  // Display's the allowed column names
  displayedColumns: string[] = ['vehicleNumber', 'vehicleName',
                                'date', 'cityOfTravel', 'drivername',
                                'drivernumber', 'start', 'end', 'total', 'action'];

  showAlert: boolean;
  vehicle_data: any;
  dataSource = new MatTableDataSource(this.vehicle_data);
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('form', {static: true}) ngForm;
  mySubscription: Subscription;


  url = 'vehicle';
  usersList: Array<VEHICLE>;
  vehicle: VEHICLE = undefined;
  myForm: FormGroup;

  insuranceRenewal: number;
  kmCovered: number;
  totalVehicles: number;
  petrolConsumed: number;
  totalDrivers: number;
  vehicleService: number;

  ngOnInit() {
    this.createForm();
    this.getData();
    this.getHeaderData();
    this.dataSource.sort = this.sort;
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      vehicleName: new FormControl(this.vehicle ? this.vehicle.vehicleName : '', Validators.required),
      cityOfTravel: new FormControl(this.vehicle ? this.vehicle.cityOfTravel : '', Validators.required),
      vehicleNumber: new FormControl(this.vehicle ? this.vehicle.vehicleNumber : '', Validators.required),
      dateStart: new FormControl(this.vehicle ? this.vehicle.dateStart : '', Validators.required),
      driverName: new FormControl(this.vehicle ? this.vehicle.driverName : '', Validators.required),
      driverNumber: new FormControl(this.vehicle ? this.vehicle.driverNumber : '', Validators.required),
      startingMeter: new FormControl(this.vehicle ? this.vehicle.startingMeter : '', Validators.required),
      endingMeter: new FormControl(this.vehicle ? this.vehicle.endingMeter : '')
     // totalToday: new FormControl(this.vehicle? this.vehicle.startingMeter : '')
    });
  }

 submitForm(data) {

     if (data.valid) {
      this.addStudent(data.value);
     }
 }

  getData(): void {
    this.httpClientService.get(this.url).subscribe(res => {
      const response = JSON.parse(JSON.stringify(res));
      this.usersList = response.data;
      this.dataSource = new MatTableDataSource(this.usersList);
    });

  }

 addStudent(Vehicles: VEHICLE): void {
     if (this.vehicle) {
     Vehicles.id = this.vehicle.id; }
     this.httpClientService.post(this.url, Vehicles).subscribe(res => {
      this.getData();
      this.myForm.reset();
      this.showAlert = false;
      this.getHeaderData();

      this.vehicle = undefined;
    }, error => {
         alert('Something went wrong. Our Engineers are working on it');
    });

  }

  cancelForm() {
    this.showAlert = false;
    this.myForm.reset();
  }

  clearForm() {
    this.myForm.reset();
  }


  edit(Vehicle: VEHICLE): void {
    console.log(Vehicle);
    this.showAlert = true;
    this.vehicle = Vehicle;
    // tslint:disable-next-line: no-string-literal
    this.myForm.controls['vehicleNumber'].setValue(this.vehicle.vehicleNumber);
    this.myForm.controls.vehicleName.setValue(this.vehicle.vehicleName);
    this.myForm.controls.cityOfTravel.setValue(this.vehicle.cityOfTravel);
    this.myForm.controls.dateStart.setValue(this.vehicle.dateStart);
    this.myForm.controls.driverName.setValue(this.vehicle.driverName);
    this.myForm.controls.driverNumber.setValue(this.vehicle.driverNumber);
    this.myForm.controls.startingMeter.setValue(this.vehicle.startingMeter);
    this.myForm.controls.endingMeter.setValue(this.vehicle.endingMeter);
   // this.myForm.controls['totalMeter'].setValue(this.vehicle.totalMeter)

  }

  delete(Vehicle: VEHICLE): void {
    this.httpClientService.delete(this.url, Vehicle).subscribe(res => {
      const data = JSON.parse(JSON.stringify(res));
      this.getData();
    }, error => {
    });

    this.getHeaderData();
  }


  handleResponse(response): void {
     this.vehicle_data = response;
     this.dataSource = new MatTableDataSource(this.vehicle_data);
     this.dataSource.sort = this.sort;
  }


  alertMethod() {
   this.showAlert = !this.showAlert;
  }


  /** Gets the headerInfo data from database for Vehicle Detail page */
  getHeaderData() {

    this.httpClientService.getHeaderData().subscribe(response => {
      console.log(response);
      this.totalVehicles = response.totalVehicles;
      this.kmCovered = response.kmCovered;
      this.totalDrivers = response.totalDrivers;
      this.petrolConsumed = response.petrolConsumed;
      this.vehicleService = response.vehicleService;
      this.insuranceRenewal = response.insuranceRenewal;
    });
  }


  exportToExcel() {
    console.log(this.dataSource.data);
    const workSheet = XLSX.utils.json_to_sheet(this.dataSource.data);
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'rmsVehicleData');
    XLSX.writeFile(workBook, 'rmsVehicleData.xlsx');


  }


  redirectToDetailsPage(rowData) {
    this.rowDataService.selectionEvent(rowData);
    this.router.navigate(['/admin/vehicleinfodetails']);
  }



}
