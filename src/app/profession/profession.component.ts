import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Page } from "./../services/pages/page";
import { PagesService } from "./../services/pages/pages.service";
import { Router } from '@angular/router';
import { TruncatePipe } from "./../truncate";

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[PagesService, TruncatePipe]

})
export class ProfessionComponent implements OnInit {
  profBannerText = "test TEST CAPILIZE";

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
    this.getPage('professionals');
  }

}
