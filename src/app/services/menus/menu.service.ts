import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GlobalVariable } from './../../globals';
import { Location }   from '@angular/common';

import 'rxjs/add/operator/map';
import { Menu } from "./menu";

@Injectable()
export class MenuService {

  private _wpBase = GlobalVariable.BASE_API_URL;

  constructor(private http:Http) { }

  getOption(): Observable<Menu>{
console.log(this._wpBase + 'wp-api-menus/v2/menu-locations');
    return this.http
    .get(this._wpBase + 'wp-api-menus/v2/menu-locations')
    .map((res: Response)=>res.json());
  }

}
