import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  events = [
    {
      id: 0,
      title: 'Idea Started',
      content: 'Greatest Ideas arises from humble place',
      date: 'Jan-2020',
      icon: '/assets/images/takeoff.svg'
    },
    {
      id:1,
      title: 'Release Version  2020.2.1',
      content: 'Released First version with capable of Adding,Storing, Editing Vehicle Data',
      date: 'Feb-2020',
      icon: 'https://img.icons8.com/nolan/64/baby-app.png'
    },
    {
      id:2,
      title: 'Release Version  2020.3.1',
      content: 'Side Menu Updated,Login Authorization, updated UI designs',
      date: 'July-2020',
      icon: 'https://img.icons8.com/nolan/64/baby-app.png'
    }
    
  ];

  ngOnInit() {
  }

}
