import { Component, ViewEncapsulation } from '@angular/core';
import { Page } from "./../services/pages/page";
import { PagesService } from "./../services/pages/pages.service";
import { Post } from "./../services/posts/post";
import { PostsService } from "./../services/posts/posts.service";
import { Router } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PostsService,PagesService]
})

export class HomeComponent {

    vidbanner = true;
    posts: Post[];
    news;
    page: Page;

    constructor(
    private pagesService: PagesService,
    private postsService: PostsService,
    private router: Router
    ) {}

getSmallItems(items){
  var newset:any[] =[];
  //items.forEach(_item => {
  //  var _items = {'content':_item.large_content,'author':_item.large_author,'location':_item.large_author_location,'button_text':_item.large_button_text,'button_url':_item.large_button_url,'image':_item.large_image};
  //  newset.push(_items);
  //
  //  var _items = {'content':_item.small_1_content,'author':_item.small_1_author,'location':_item.small_1_author_location,'button_text':_item.small_1_button_text,'button_url':_item.small_1_button_url,'image':_item.Small_1_image};
  //  newset.push(_items);
  //
  //  var _items = {'content':_item.small_2_content,'author':_item.small_2_author,'location':_item.small_2_author_location,'button_text':_item.small_2_button_text,'button_url':_item.small_2_button_url,'image':_item.Small_2_image};
  //  newset.push(_items);
  //
  //});
  return newset;
}
getNewsPosts(){
    this.postsService
      .getCustomPost('news?filter[orderby]=date&order=desc&per_page=10')
      .subscribe(
        res => {
          this.news = res;
        }
      );
  }
  getPage(slug){
     this.pagesService
      .getPage(slug)
      .subscribe(res => {
        this.page = res[0];

      });
  }

    ngOnInit() {
    this.getPage('home');
    this.getNewsPosts();

    }
}

