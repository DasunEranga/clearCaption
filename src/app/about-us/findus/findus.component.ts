import { Component, OnInit, ViewEncapsulation,Inject, Injectable } from '@angular/core';
import { Page } from "./../../services/pages/page";
import { PagesService } from "./../../services/pages/pages.service";
import {  ActivatedRoute, Params, Router, UrlSegment } from "@angular/router";
import { Option } from './../../services/option/option';
import { OptionService } from "./../../services/option/option.service";


@Component({
  selector: 'app-findus',
  templateUrl: './findus.component.html',
  styleUrls: ['./findus.component.scss'],
  providers: [PagesService,OptionService],
  encapsulation: ViewEncapsulation.None

})
export class FindusComponent implements OnInit {
page: Page;
private myUrl:any;
events;
  constructor(
    private PagesService: PagesService,
    private OptionService: OptionService,
    private route: ActivatedRoute
  ) {
    this.route.url.subscribe(
     (data: any) => {
         for (let i of data) {
            this.myUrl = i.path;
            // ... get whatever you want
         }
         console.log("Current Urlx ", this.myUrl);
     },
     (error: any) => console.debug("URL ERROR", error));
  }

  getPage(slug){
     this.PagesService
     .getPage(slug)
      .subscribe(res => {
        this.page = res[0];
      });
  }
  getEvents(){
    this.OptionService.getEvents().subscribe(res => {
      this.events = res;
      console.log(res);
    })
  }

  ngOnInit() {
        this.getPage('find-us');
        //this.getEvents();
  }

}
