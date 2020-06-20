import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit {

  constructor() { }

 driverDetailsList =[
  {
    "name": "AAAAA",
    "phoneNumber" : "+910000000000",
    "licenseNumber" : "TN 00 00 00 00",
    "batchNumber" : "BGT 00 ABH XXX",
    "companyName" : "Rams Corporation",
    "salary": "Rs. 352"
  },
  {
    "name": "BBBBBB",
    "phoneNumber" : "+910000000000",
    "licenseNumber" : "TN 00 XX 00 YYY",
    "batchNumber" : "BAT 99 AYH XXX",
    "companyName" : "Rams Corporation",
    "salary": "Rs. 352"
  }
]



  ngOnInit() {
     console.log(this.driverDetailsList)
  }

}
