import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
/**
 * Base calss for Dashboard Page.
 */
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.vehicleCount = 0;
  }

  /**
   * invoked when the user clicks the view trip button
   */
  public onViewTripClick(){
   
    this.router.navigate(['/admin/viewtrip']);
  }

  /**
   * invoked when the user clicks add new vehicle button
   * The user will be redirected to the add new vehicle component
   */
  public onAddnewVehicleClick(){
    this.router.navigate(['/admin/addvehicle']);
  }

  private vehicleCount: number;

}
