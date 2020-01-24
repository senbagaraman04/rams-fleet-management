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
    
  ];

  ngOnInit() {
  }

}
