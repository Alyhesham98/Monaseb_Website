import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import AOS from 'aos';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  contactUsForm: FormGroup;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    AOS.init();
    this.contactUsForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.contactUsForm.value);
    alert('You message sent successfully, we will reply ASAP.');
    // this.http
    //   .post(
    //     'https://api.monaaseb.com/api/contactus',
    //     JSON.stringify(this.contactUsForm.value)
    //   )
    //   .subscribe(
    //     (response) => {
    //       console.log('Message sent successfully: ', response);
    //     },
    //     (error) => {
    //       console.log('Error sending message: ', error);
    //     }
    //   );
    this.contactUsForm.reset();
  }
}
