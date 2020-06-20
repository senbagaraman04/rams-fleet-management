import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
  animations: [
    trigger('expandMenuBar', [
      state('open', style({
        minWidth: '270px',
        maxWidth: '299px',
        zIndex: '11',
      })),
      state('closed', style({
        width: '64px',
        overflow: 'hidden',
        minHeight: '100vw'
      })),
      transition('open => closed', [
        animate('0s'),
      ]),
      transition('closed => open', [
        animate('0s')
      ])
    ])
  ]
})
export class AdminPanelComponent implements OnInit {
 
  expandMenu : boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
