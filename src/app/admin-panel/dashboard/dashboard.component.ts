import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.vehicleCount = 0;
  }

  private vehicleCount: number;

}
