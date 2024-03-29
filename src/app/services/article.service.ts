import { Injectable } from '@angular/core';
import { Article} from '../shared/article';
import { ARTICLES } from '../shared/articles';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles(): Article[] {
    return ARTICLES;
  };

  getLength():number{
    return ARTICLES.length
  }

}
