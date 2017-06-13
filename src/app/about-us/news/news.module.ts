import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsSingleComponent } from './news-single/news-single.component';

import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [NewsListComponent, NewsSingleComponent]
})
export class NewsModule { }
