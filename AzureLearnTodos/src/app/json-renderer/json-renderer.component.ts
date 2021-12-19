import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-json-renderer',
  templateUrl: './json-renderer.component.html',
  styleUrls: ['./json-renderer.component.scss']
})
export class JsonRendererComponent implements OnInit {

  logFilePath: string = '';
  jsonData: string = '';
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
          console.log(params); // { orderby: "price" }
          this.logFilePath = params.view_url;
          console.log(this.logFilePath); // price
        this.httpClient.get(this.logFilePath).subscribe(data => {
            this.jsonData = JSON.stringify(data, null, 2);
            console.log(data);
          });
        }
      );
  }



}
