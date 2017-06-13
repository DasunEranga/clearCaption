import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Page } from "./../services/pages/page";
import { PagesService } from "./../services/pages/pages.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss'],
  providers: [PagesService],
  encapsulation: ViewEncapsulation.None
})
export class ThankyouComponent implements OnInit {

page: Page
  constructor(
    private PagesService: PagesService,
    private router: Router
  ) {
  }
getPage(slug){
     this.PagesService
     .getPage(slug)
      .subscribe(res => {
        this.page = res[0];
      });
  }
  ngOnInit() {
    this.getPage('thank-you');
  }
}
