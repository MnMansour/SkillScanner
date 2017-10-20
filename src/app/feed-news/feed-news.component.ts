import { Component, OnInit, Inject, Input} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FeedService } from '../services/feed.service';
import { Feed } from '../shared/feed';



@Component({
  selector: 'app-feed-news',
  templateUrl: './feed-news.component.html',
  styleUrls: ['./feed-news.component.scss']
})
export class FeedNewsComponent implements OnInit {
  feeds : Feed[];
  feed: Feed;
  lists:number [];
  listEnd : number = 5;
  listStart: number = 0;
  countries= [{name : 'All', value : ""},{name : 'Finland', value : "finland"},{name : 'Sweden', value : "sweden"},{name : 'Denmark', value : "denmark"},{name : 'Norway', value : "norway"}];
  dates= [{name:'Newer',value:"true"},{name:'Older',value:""}]
  publishers=['Partner 1', 'Partner 2'];
  
  constructor(private feedService : FeedService,
  private dialog : MatDialog) { }

  ngOnInit() {
    this.feeds = this.feedService.getFeeds(); 
  }

  openDialog(): void {
    let dialogRef = this.dialog.open( DialogFeedNews, {
      height: '500px',
      width: '750px',
      data :this.feed
    });
  }

  select(feed) {
    this.feed=feed
  }
}

@Component({
  selector: 'dialog-feed-news',
  templateUrl: 'dialog-feed-news.html',
})
export class DialogFeedNews {

  constructor(
    public dialogRef: MatDialogRef<DialogFeedNews>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
