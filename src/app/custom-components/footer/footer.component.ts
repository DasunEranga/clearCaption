import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Option } from './../../services/option/option';
import { OptionService } from "./../../services/option/option.service";
import { Page } from "./../../services/pages/page";
import { PagesService } from "./../../services/pages/pages.service";
import { Menu } from "./../../services/menus/menu";
import { MenuService } from "./../../services/menus/menu.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [OptionService, PagesService, MenuService]
})

export class FooterComponent implements OnInit {

  option:Option;
menu: Menu;
  page: Page;

  constructor(
    private optionService: OptionService,
    private pageService: PagesService,
    private menuService: MenuService,
    private router: Router
  ) { }

  getOption(){
    this.optionService
    .getOption()
    .subscribe(
      res=>{
        this.option=res;
    }
    );
  }

  getMenus(){
    this.menuService
    .getOption()
    .subscribe(
      res=>{
        console.log(res)
        this.menu=res;
    }
    );
  }

  ngOnInit() {
    this.getOption();
    this.getMenus();

  }

}
