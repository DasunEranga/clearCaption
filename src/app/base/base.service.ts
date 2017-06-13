import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { GlobalVariable } from '../globals';

import 'rxjs/add/operator/map';

import { Base } from './base';

@Injectable()
export class BaseService {

  private _wpBase = GlobalVariable.BASE_API_URL;;

  constructor(private http: Http) { }

  getMenus(): Observable<Base[]> {

    return this.http
      .get(this._wpBase + 'wp-api-menus/v2/menus')
      .map((res: Response) => res.json());

  }

  getTopMenu(): Observable<Base> {
    var menu_url=null;
    var menu = this.getMenus();
    for (var key in menu){
      console.log(key);
      if(menu[key].slug=="topmenu"){
        menu_url=menu[key].meta.links.links;
      }

     }
    if(menu_url){
      return this.http
      .get(menu_url)
      .map((res: Response) => res.json());
    }
    return;
    

  }

}
