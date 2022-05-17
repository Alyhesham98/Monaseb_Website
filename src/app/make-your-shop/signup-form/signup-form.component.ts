import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      shopName: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      fullName: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^-?([0-9]\d*)?$/),
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
      ]),
      address: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required]),
      personalID: new FormControl(null, [Validators.required]),
      commercialRegister: new FormControl(null),
      aboutMyStore: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.http
      .post(
        'https://api.monaaseb.com/api/makeyourshop',
        JSON.stringify(this.signUpForm.value)
      )
      .subscribe(
        (response) => {
          console.log(
            'Shop Successfully Created: ' + response
          );
          this.router.navigate(['payment']);
        },
        (error) => {
          console.log('Error Creating The Shop: ', error);
        }
      );
  }
}
