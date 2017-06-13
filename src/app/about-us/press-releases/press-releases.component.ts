import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from "./../../services/posts/post";
import { PostsService } from "./../../services/posts/posts.service";
import { Page } from "./../../services/pages/page";
import { PagesService } from "./../../services/pages/pages.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-press-releases',
  templateUrl: './press-releases.component.html',
  styleUrls: ['./press-releases.component.scss'],
  providers: [PostsService,PagesService],
  encapsulation: ViewEncapsulation.None
})
export class PressReleasesComponent implements OnInit {

press: Post;
page: Page;
  constructor(
    private postsService: PostsService,
    private PagesService: PagesService,
    private router: Router
  ) { }

  getPress(para){
  this.postsService
  .getCustomPost(para)
  .subscribe(res=>{

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
    this.getPress('PressReleases');
    this.getPage('press-releases');
  }

}
