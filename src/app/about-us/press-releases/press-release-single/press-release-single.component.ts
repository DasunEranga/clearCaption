import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from "./../../../services/posts/post";
import { PostsService } from "./../../../services/posts/posts.service";

@Component({
  selector: 'app-press-release-single',
  templateUrl: './press-release-single.component.html',
  styleUrls: ['./press-release-single.component.scss'],
    providers: [PostsService],
  encapsulation: ViewEncapsulation.None
})
export class PressReleaseSingleComponent implements OnInit {
press: Post;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute) { }

getPress(param){
  this.postsService
  .getCustomPost(param)
  .subscribe(res=>{
    this.press =res[0];
  });
}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
      this.getPress('pressreleases?slug='+slug)
    });
  }

}
