import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Page } from "./../services/pages/page";
import { PagesService } from "./../services/pages/pages.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-a-demo',
  templateUrl: './request-a-demo.component.html',
  styleUrls: ['./request-a-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [PagesService]
})
export class RequestADemoComponent implements OnInit {

page: Page;

  constructor(
    private pagesService: PagesService,
    private router: Router
  ) { }

getPage(slug){
    this.pagesService
      .getPage(slug)
      .subscribe(res => {
        this.page = res[0];

      });
  }
  ngOnInit() {
this.getPage('request-a-demo');

    }
}

