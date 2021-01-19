import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DRIVER } from 'src/app/shared/formFields';
import { HttpClientService } from 'src/app/service/http-client.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit {

  url: string = 'driver';
  usersList: Array<DRIVER>;
  driver: DRIVER = undefined ;
  myForm: FormGroup;
  formResponse : boolean = false;
  formResponseText: string;
  showDriverForm : boolean = false;
  dataSource: any;

  //Display's the allowed column names
  displayedColumns: string[] = ['driverName', 'driverNumber', 'licenseNumber', 'batchNumber', 'expiryDateLicense','expiryDateBatch','action'];
  driverForm: DRIVER;
  

  constructor(private formBuilder:FormBuilder, private httpClientService:HttpClientService) { }


  ngOnInit() 
  {
     this.createDriverDetailsForm();
     this.getData();
  }

 
  /**Method to initialize Driver Details Form */
  createDriverDetailsForm() 
  {
    this.myForm = this.formBuilder.group({

      driverName : new FormControl(this.driver ? this.driver.driverName: '', Validators.required),
      driverNumber : new FormControl(this.driver ? this.driver.driverNumber: '', Validators.required),
      batchNumber : new FormControl(this.driver ? this.driver.batchNumber: '', Validators.required),
      licenseNumber : new FormControl(this.driver ? this.driver.licenseNumber: '', Validators.required),
      expiryDateLicense : new FormControl(this.driver ? this.driver.expiryDateLicense: '', Validators.required),
      expiryDateBatch : new FormControl(this.driver ? this.driver.expiryDateBatch: '', Validators.required),
    });

  }


  submitForm(data) {
    if (data.valid)
    {
      this.showDriverForm = false;
      this.addDriverDetails(data.value);
    }  
 }

 /**Control to add driver data to database */
 addDriverDetails(Drivers: DRIVER): void {
  if (this.driver) {  Drivers.id = this.driver.id; }

   this.httpClientService.postDriverData(this.url, Drivers).subscribe(res => {    
   this.getData();
   this.myForm.reset();
   this.driver = undefined;
   this.formResponse = true;
   this.formResponseText = "Driver details has been successfully updated";
 }, error => {
 })

}

cancelForm() : void {
 this.myForm.reset();

}




getData(): void {
   this.httpClientService.getDriverData(this.url).subscribe(res => {
     let response = JSON.parse(JSON.stringify(res));
     this.usersList = response.data;
     this.dataSource =new MatTableDataSource(this.usersList);
   })

}




edit(DriverDetails: DRIVER): void {
  this.driverForm = DriverDetails;
  this.myForm.controls['batchNumber'].setValue(this.driverForm.batchNumber)
  this.myForm.controls['licenseNumber'].setValue(this.driverForm.licenseNumber)
  this.myForm.controls['expiryDateBatch'].setValue(this.driverForm.expiryDateBatch)
  this.myForm.controls['expiryDateLicense'].setValue(this.driverForm.expiryDateLicense)
  this.myForm.controls['driverName'].setValue(this.driverForm.driverName)
  this.myForm.controls['driverNumber'].setValue(this.driverForm.driverNumber)
  this.showDriverForm = true;
}

delete(DriverDetails: DRIVER): void {
  this.httpClientService.deleteDriverData(this.url, DriverDetails).subscribe(res => {
    this.getData()
  }, error => {
  })
}



}
