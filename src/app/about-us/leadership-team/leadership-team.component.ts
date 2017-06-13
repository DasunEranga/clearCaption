import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from "./../../services/posts/post";
import { PostsService } from "./../../services/posts/posts.service";
import { Page } from "./../../services/pages/page";
import { PagesService } from "./../../services/pages/pages.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-leadership-team',
  templateUrl: './leadership-team.component.html',
  styleUrls: ['./leadership-team.component.scss'],
  providers: [PostsService,PagesService],
  encapsulation: ViewEncapsulation.None
})
export class LeadershipTeamComponent implements OnInit {

team: Post;
page: Page;
  constructor(
    private postsService: PostsService,
    private PagesService: PagesService,
    private router: Router
  ) { }

getTeam(){
  this.postsService
  .getCustomPost('team?filter[orderby]=date&order=desc&per_page=10')
  .subscribe(res=>{
  this.team =res;
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
    this.getTeam();
    this.getPage('leadership-team');
  }

}
