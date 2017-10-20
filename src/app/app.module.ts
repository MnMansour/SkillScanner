import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatButtonToggleModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
  MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';


import 'hammerjs';


import { AppComponent } from './app.component';
import { FeedNewsComponent, DialogFeedNews } from './feed-news/feed-news.component';
import { JobsComponent, DialogJob } from './jobs/jobs.component';
import { ArticlsComponent , DialogArticle} from './articls/articls.component';

import { FeedService } from './services/feed.service';
import { JobService } from './services/job.service';
import { ArticleService } from './services/article.service';


@NgModule({
  declarations: [
    AppComponent,
    FeedNewsComponent,
    DialogFeedNews,
    JobsComponent,
    DialogJob,
    ArticlsComponent,
    DialogArticle
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule, 
    MatRadioModule, 
    MatSelectModule, 
    MatSliderModule,
    MatSlideToggleModule, 
    MatToolbarModule, 
    MatListModule, 
    MatGridListModule,
    MatCardModule, 
    MatIconModule, 
    MatProgressSpinnerModule, 
    MatDialogModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    OrderModule
  ],
  entryComponents: [
    DialogFeedNews,
    DialogJob,
    DialogArticle  
  ],
  providers: [FeedService,
              JobService,
              ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
