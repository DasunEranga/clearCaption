import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from "./../services/posts/post";
import { PostsService } from "./../services/posts/posts.service";
import { Page } from "./../services/pages/page";
import { PagesService } from "./../services/pages/pages.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-product-brochures',
  templateUrl: './product-brochures.component.html',
  styleUrls: ['./product-brochures.component.scss'],
  providers: [PostsService,PagesService],
  encapsulation: ViewEncapsulation.None
})
export class ProductBrochuresComponent implements OnInit {
post: Post;
brochures;
page: Page;
  constructor(
    private postsService: PostsService,
    private PagesService: PagesService,
    private router: Router
  ) { }

getBrochures(){
  this.postsService
  .getCustomPost('brochures?filter[orderby]=date&order=desc&per_page=10')
  .subscribe(res=>{
    this.brochures =res;
  });
}

getPage(slug){
     this.PagesService
     .getPage(slug)
      .subscribe(res => {
        this.page = res[0];
      });
  }
  ngOnInit() {
    this.getBrochures();
    this.getPage('product-brochures-user-guides');
  }

}
