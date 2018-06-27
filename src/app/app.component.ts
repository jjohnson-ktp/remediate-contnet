import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  content: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getContent().subscribe((res) => {
      console.log(res);
      this.content = res;
    });
  }

  getContent() {
    return this.http.get('https://content-integration.qa.ktp.io/api/v1/items/remediation_13_sample');
  }

}
