import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loggedIn: boolean;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      currentUser: new FormControl('Customer'),
    });
  }

  onSubmit() {
    // If user is a shop owner
    if (this.loginForm.value.currentUser === 'ShopOwner') {
      console.log(this.loginForm.value);
      this.http
        .post(
          'https://api.monaaseb.com/api/makeyourshop',
          JSON.stringify(this.loginForm.value)
        )
        .subscribe(
          (response) => {
            console.log(
              'Logged in as a shop owner successfully with response: ' +
                response
            );
            this.loggedIn = true;
          },
          (error) => {
            console.log('error fel shop owner login: ', error);
            this.loggedIn = false;
          }
        );
    } else {
      // else user is a normal client
      this.http
        .post(
          'https://api.monaaseb.com/api/login',
          JSON.stringify(this.loginForm.value)
        )
        .subscribe(
          (response) => {
            console.log(
              'Logged in as a client successfully with response: ' + response
            );
            this.loggedIn = true;
          },
          (error) => {
            console.log('error fel client login: ', error);
            this.loggedIn = false;
          }
        );
    }
  }
}
