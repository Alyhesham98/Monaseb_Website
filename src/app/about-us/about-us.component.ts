import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  // author = '';
  // content = '';
  // url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2020-10-16&sortBy=publishedAt&apiKey=c82e217c56ef438eb4e7fd44a56fe786';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  // onClick() {
  //   this.http.get(this.url).subscribe(data => {
  //     console.log(data);
  //     this.author = data.articles[0].author;
  //     this.content = data.articles[0].content;
  //   });
  // }

}
