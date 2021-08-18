import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalRowDataStorageService } from 'src/app/service/local-data-storage.service';

@Component({
  selector: 'app-vehicle-info-details',
  templateUrl: './vehicle-info-details.component.html',
  styleUrls: ['./vehicle-info-details.component.scss']
})
export class VehicleInfoDetailsComponent implements OnInit {

  constructor(private router: Router, private rowDataService: LocalRowDataStorageService) { }

  ngOnInit() {
    this.rowDataService.selectedRowData.subscribe(data => {
      console.log(data);
    }
    );
  }

   

}
