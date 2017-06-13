import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Page } from "./../../services/pages/page";
import { PagesService } from "./../../services/pages/pages.service";
import { Router } from "@angular/router";
import { GlobalVariable } from './../../globals';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  providers: [PagesService],
  encapsulation: ViewEncapsulation.None
})

export class ContactUsComponent implements OnInit {
page: Page;
grc_key = GlobalVariable.GC_SITE_KEY;

  constructor(
    private PagesService: PagesService,
    private router: Router
  ) { }
getPage(slug){
     this.PagesService
     .getPage(slug)
      .subscribe(res => {
        this.page = res[0];
      });
  }
  ngOnInit() {
    this.getPage('contact-us');
  }

}
