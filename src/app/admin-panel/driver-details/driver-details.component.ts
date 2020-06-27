import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DRIVER } from 'src/app/shared/formFields';
import { HttpClientService } from 'src/app/service/http-client.service';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit {

  url: string = 'driver';
  usersList: Array<DRIVER>;
  driver: DRIVER ;
  myForm: FormGroup;
  formResponse : boolean = false;
  formResponseText: string;



  constructor(private formBuilder:FormBuilder, private httpClientService:HttpClientService) { }


  ngOnInit() 
  {
     console.log("Driver Details page loaded");
     this.createDriverDetailsForm();
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
    if (data.valid)  this.addDriverDetails(data.value);
 }

 /**Control to add driver data to database */
 addDriverDetails(Drivers: DRIVER): void {
  if (this.driver)
  Drivers.id = this.driver.id
   this.httpClientService.postDriverData(this.url, Drivers).subscribe(res => {    
   let response = JSON.parse(JSON.stringify(res))    
   this.getData();
   this.myForm.reset();
   this.driver = undefined;
   this.formResponse = true;
   this.formResponseText = "Driver details has been successfully added";
 }, error => {
 })

}

cancelForm() : void {
 this.myForm.reset();
}




getData(): void {
  // this.httpClientService.get(this.url).subscribe(res => {
  //   let response = JSON.parse(JSON.stringify(res));
  //   this.usersList = response.data;
  //   this.dataSource =new MatTableDataSource(this.usersList);
  //   console.log(this.dataSource.data);
  // })

}




}
