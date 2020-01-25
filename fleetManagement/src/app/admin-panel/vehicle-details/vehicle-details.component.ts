import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("vehicle details loaded");
  
  }

}
