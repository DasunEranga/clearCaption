import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewsListComponent } from './news-list/news-list.component';
import { NewsSingleComponent } from './news-single/news-single.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'news', component: NewsListComponent },
      { path: 'news/:slug', component: NewsSingleComponent }
    ])
  ]
})
export class NewsRoutingModule { }
