import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  submitted = false;
  flagsCheck = false;
  message = '';


  constructor(private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }



  ngAfterViewInit() {

 let current = null;

 // tslint:disable-next-line: only-arrow-functions
 document.querySelector('#email').addEventListener('focus', function(e) {
    if (current) { current.pause(); }
    current =  anime({targets: 'path', strokeDashoffset: { value: 0, duration: 700, easing: 'easeOutQuart'},
                         strokeDasharray: { value: '240 1386', duration: 700, easing: 'easeOutQuart' } }) as any;
  });

 // tslint:disable-next-line: only-arrow-functions
 document.querySelector('#password').addEventListener('focus', function(e) {
    if (current) { current.pause(); }
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

 // tslint:disable-next-line: only-arrow-functions
 document.querySelector('#submit').addEventListener('focus', function(e) {
    if (current) { current.pause(); }
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



  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;

    }
    this.checkLogin();
    console.log('done');

  }
  get f() {
    return this.loginForm.controls;
  }

  checkLogin() {
    console.log("Came here...");
    this.router.navigate(['/admin/dashboard']);
    this.flagsCheck = true;
    
  //   if (this.loginForm.controls.username.value === environment.userName &&
  //         this.loginForm.controls.password.value === environment.password) {
  //    this.message = 'login success';
    

  //  } else {
  //    this.message = 'Username or password is incorrect';
  //  }

 }
}
