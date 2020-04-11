import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  highcharts = Highcharts;
   chartOptions = {   
      chart: {
         type: "spline"
      },
      title: {
         text: "Monthly Running Report"
      },
      subtitle: {
       //  text: "Source: WorldClimate.com"
      },
      xAxis:{
         categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {          
         title:{
            text:"Kilometer Reading"
         } 
      },
      tooltip: {
         valueSuffix:" km"
      },
      series: [
         {
            name: 'Ace',
            data: [100,200,250,100,49,100,30,100,250,123,435,223]
         },
         {
            name: 'Ace2',
            data: [800,250,255,300,350,400,450,444,100,123,435,643]
         },
        
      ]
   };

}
