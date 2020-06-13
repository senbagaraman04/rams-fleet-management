import { Component, OnInit, AfterViewInit } from '@angular/core';
import  anime from 'animejs';
//import {anime} from '../../../node_modules/animejs/lib/anime';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  constructor() { }


  ngOnInit() {
    
  }



  ngAfterViewInit() {

 var current = null; 

 document.querySelector('#email').addEventListener('focus', function(e) {
    if (current) current.pause();
     current = <any>anime({targets: 'path', strokeDashoffset: { value: 0, duration: 700,easing: 'easeOutQuart'},
                         strokeDasharray: { value: '240 1386', duration: 700,easing: 'easeOutQuart' } });
  });

  document.querySelector('#password').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
      targets: 'path',
      strokeDashoffset: {
        value: -336,
        duration: 700,
        easing: 'easeOutQuart'
      },
      strokeDasharray: {
        value: '240 1386',
        duration: 700,
        easing: 'easeOutQuart'
      }
    });
  });

  document.querySelector('#submit').addEventListener('focus', function(e) {
    if (current) current.pause();
    current = anime({
      targets: 'path',
      strokeDashoffset: {
        value: -730,
        duration: 700,
        easing: 'easeOutQuart'
      },
      strokeDasharray: {
        value: '530 1386',
        duration: 700,
        easing: 'easeOutQuart'
      }
    });
  });
  }
  


 
}
