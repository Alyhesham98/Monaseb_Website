import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {

  cards = [1, 2, 3];
  constructor(public translate: TranslateService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://monaaseb.com:8000/api/shops').subscribe(data => {
      console.log(data);
    });
  }

}
