import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ArticleService } from '../services/article.service';
import { Article } from '../shared/article';

@Component({
  selector: 'app-articls',
  templateUrl: './articls.component.html',
  styleUrls: ['./articls.component.css']
})
export class ArticlsComponent implements OnInit {
  articles : Article[];
  article: Article;
  lists:number [];
  listEnd : number = 5;
  listStart: number = 0;
  length:number;
  countries= [{name : 'All', value : ""},{name : 'Finland', value : "finland"},{name : 'Sweden', value : "sweden"},{name : 'Denmark', value : "denmark"},{name : 'Norway', value : "norway"}];
  dates= [{name:'Newer',value:"true"},{name:'Older',value:""}]
  publishers=['Partner 1', 'Partner 2'];

  constructor(private articleService : ArticleService,
  private dialog : MatDialog) { }

  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.length = this.articleService.getLength()
  }
  openDialog(): void {
    let dialogRef = this.dialog.open( DialogArticle, {
      height: '500px',
      width: '750px',
      data :this.article
    });
  }

  select(article) {
    this.article=article
  }
}
@Component({
  selector: 'dialog-article',
  templateUrl: 'dialog-article.html',
})
export class DialogArticle {

  constructor(
    public dialogRef: MatDialogRef<DialogArticle>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

