import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from "./../../services/posts/post";
import { PostsService } from "./../../services/posts/posts.service";
import { Page } from "./../../services/pages/page";
import { PagesService } from "./../../services/pages/pages.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-guides',
  templateUrl: './user-guides.component.html',
  styleUrls: ['./user-guides.component.scss'],
  providers: [PostsService,PagesService],
  encapsulation: ViewEncapsulation.None

})
export class UserGuidesComponent implements OnInit {

userguides: Post;
page: Page;
  constructor(
    private postsService: PostsService,
    private PagesService: PagesService,
    private router: Router
  ) { }

getUserGuides(){
  this.postsService
  .getCustomPost('BrochuresUserGuides?filter[orderby]=date&order=desc&per_page=10')
  .subscribe(res=>{
    this.userguides =res;
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
    this.getUserGuides();
    this.getPage('user-guides');
  }

}
