import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from "./../../../services/posts/post";
import { PostsService } from "./../../../services/posts/posts.service";

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.component.html',
  styleUrls: ['./news-single.component.scss'],
  providers: [PostsService],
  encapsulation: ViewEncapsulation.None
})
export class NewsSingleComponent implements OnInit {

  news: Post;
  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute) { }

  getPost(param){
     this.postsService
      .getCustomPost(param)
      .subscribe(res => {
        this.news = res[0];
      });


  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
      this.getPost('news?slug='+slug)
    });

  }

}
