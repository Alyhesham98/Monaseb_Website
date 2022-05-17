import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-ads-section',
  templateUrl: './ads-section.component.html',
  styleUrls: ['./ads-section.component.css']
})
export class AdsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
