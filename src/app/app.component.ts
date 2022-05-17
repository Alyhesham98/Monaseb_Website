import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollTopService } from './ScrollTopService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Monaseb';
  currentLang: string;

  constructor(public translate: TranslateService, private scrollUp: ScrollTopService) { }

  ngOnInit() {
    this.scrollUp.setScrollTop();
  }

  changeCurrentLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('currentLang', lang);
  }
}
