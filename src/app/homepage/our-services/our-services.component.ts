import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
