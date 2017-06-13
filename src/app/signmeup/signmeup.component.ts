import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Page } from "./../services/pages/page";
import { PagesService } from "./../services/pages/pages.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signmeup',
  templateUrl: './signmeup.component.html',
  styleUrls: ['./signmeup.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [PagesService]
})
export class SignmeupComponent implements OnInit {

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
this.getPage('sign-me-up');

    }
}

