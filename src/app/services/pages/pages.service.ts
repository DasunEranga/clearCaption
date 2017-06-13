import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GlobalVariable } from './../../globals';
import 'rxjs/add/operator/map';
import { Page } from './page';

@Injectable()
export class PagesService {

  private _wpBase = GlobalVariable.BASE_API_URL;;

  constructor(private http: Http) { }

  getPage(slug): Observable<Page> {
    return this.http
      .get(this._wpBase + `wp/v2/pages?slug=${slug}`)
      .map((res: Response) => res.json());
  }
}
