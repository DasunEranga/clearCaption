import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from "./../../../services/posts/post";
import { PostsService } from "./../../../services/posts/posts.service";
import { Page } from "./../../../services/pages/page";
import { PagesService } from "./../../../services/pages/pages.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-press-release-list',
  templateUrl: './press-release-list.component.html',
  styleUrls: ['./press-release-list.component.scss'],
  providers: [PostsService,PagesService],
  encapsulation: ViewEncapsulation.None
})
export class PressReleaseListComponent implements OnInit {
post: Post;
press;
page: Page;
  constructor(
    private postsService: PostsService,
    private PagesService: PagesService,
    private router: Router
  ) { }

getPress(){
  this.postsService
  .getCustomPost('pressreleases?filter[orderby]=date&order=desc&per_page=10')
  .subscribe(
    res=>{
    this.press =res;
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
    this.getPage('press-releases');
    this.getPress();
  }

}
