import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GlobalVariable } from './../../globals';
import { Location }   from '@angular/common';

import 'rxjs/add/operator/map';
import { Option } from './option';

@Injectable()
export class OptionService {

private _wpBase = GlobalVariable.BASE_API_URL;

constructor(private http:Http) { }

getOption(): Observable<Option>{
// console.log(this._wpBase + 'acf/v2/options');
    return this.http
    .get(this._wpBase + `acf/v2/options`)
    .map((res: Response)=>res.json());
  }

getEvents(): Observable<Option>{
// console.log(this._wpBase + 'acf/v2/options');
    return this.http
    .get(`http://52.53.221.164/api/fbevents`)
    .map((res: Response)=>res.json());
  }
 //http://52.53.221.164/
}


