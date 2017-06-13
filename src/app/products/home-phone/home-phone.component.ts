import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Post } from "./../../services/posts/post";
import { PostsService } from "./../../services/posts/posts.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-phone',
  templateUrl: './home-phone.component.html',
  styleUrls: ['./home-phone.component.scss'],
  providers: [PostsService],
  encapsulation: ViewEncapsulation.None
})
export class HomePhoneComponent implements OnInit {
product;
  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }

getToolTipItems(items){
  var newset:any[] =[];
  items.forEach(_item => {
    var _items = {'content':_item.box_left};
    newset.push(_items);

    var _items = {'content':_item.box_right};
    newset.push(_items);
  });
  return newset;
}
  getPost(param){
     this.postsService
      .getCustomPost(param)
      .subscribe(res => {
        this.product = res[0];
      });
  }

  ngOnInit() {
    this.getPost('product?slug=home-phone');

  }

}
