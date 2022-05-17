import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registered: boolean;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(
      JSON.stringify({
        name: this.registerForm.value.name,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      })
    );
    this.http
      .post(
        'https://api.monaaseb.com/api/register',
        JSON.stringify({
          name: this.registerForm.value.name,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password,
        })
      )
      .subscribe(
        (response) => {
          console.log(
            'Successfully submitted with response: ' + JSON.stringify(response)
          );
          this.registered = true;
        },
        (error) => {
          console.log('Error: ' + JSON.stringify(error));
          this.registered = false;
        }
      );
  }
}
