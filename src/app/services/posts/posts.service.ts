import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { GlobalVariable } from './../../globals';

import 'rxjs/add/operator/map';

import { Post } from './post';

@Injectable()
export class PostsService {

  private _wpBase = GlobalVariable.BASE_API_URL;

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {

    return this.http
      .get(this._wpBase + 'wp/v2/posts')
      .map((res: Response) => res.json());

  }
  getPost(slug): Observable<Post> {

    return this.http
      .get(this._wpBase + `wp/v2/posts?filter[name]=${slug}`)
      .map((res: Response) => res.json());

  }

  getCustomPost(param): Observable<Post> {

    return this.http
      .get(this._wpBase + `wp/v2/${param}`)
      .map((res: Response) => res.json());

  }
  getCategory(id): Observable<Post> {

    return this.http
      .get(this._wpBase + `wp/v2/categories/${id}`)
      .map((res: Response) => res.json());

  }

}
