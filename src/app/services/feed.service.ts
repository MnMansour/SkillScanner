import { Injectable } from '@angular/core';
import { Feed} from '../shared/feed';
import { FEEDS } from '../shared/feeds';

@Injectable()
export class FeedService {

  constructor() { }

   length = FEEDS.length;

  getFeeds(): Feed[] {
    return FEEDS;
  };

  getFeed(x): Feed {
    return FEEDS[x];
  }

}
