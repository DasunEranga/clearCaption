import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from "./../../../services/posts/post";
import { PostsService } from "./../../../services/posts/posts.service";
import { Page } from "./../../../services/pages/page";
import { PagesService } from "./../../../services/pages/pages.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  providers: [PostsService,PagesService],
  encapsulation: ViewEncapsulation.None
})
export class NewsListComponent implements OnInit {

news: Post;
page: Page;
  constructor(
    private postsService: PostsService,
    private PagesService: PagesService,
    private router: Router
  ) { }

getNews(){
  this.postsService
  .getCustomPost('news?filter[orderby]=date&order=desc&per_page=10')
  .subscribe(res=>{

    this.news =res;
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
    this.getNews();
    this.getPage('news');
  }

}
