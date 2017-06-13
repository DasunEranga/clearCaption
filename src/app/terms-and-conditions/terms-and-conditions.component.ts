import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Page } from "./../services/pages/page";
import { PagesService } from "./../services/pages/pages.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [PagesService]
})
export class TermsAndConditionsComponent implements OnInit {
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
this.getPage('service-terms-of-use');

    }
}
