import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { JobService } from '../services/job.service';
import { Job } from '../shared/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})

export class JobsComponent implements OnInit {
  jobs : Job[];
  job: Job;
  lists:number [];
  listEnd : number = 5;
  listStart: number = 0;
  countries= [{name : 'All', value : ""},{name : 'Finland', value : "finland"},{name : 'Sweden', value : "sweden"},{name : 'Denmark', value : "denmark"},{name : 'Norway', value : "norway"}];
  dates= [{name:'Newer',value:"true"},{name:'Older',value:""}]
  publishers=['Partner 1', 'Partner 2'];
  constructor(private jobService : JobService,
  private dialog : MatDialog) { }

  ngOnInit() {
    this.jobs = this.jobService.getJobs();
  }

  submit(x) {
    this.listEnd=5;
    this.listEnd *= x ;
    this.listStart= this.listEnd-5 
  }

  openDialog(): void {
    let dialogRef = this.dialog.open( DialogJob, {
      height: '500px',
      width: '750px',
      data :this.job
    });
  }

  select(job) {
    this.job=job
  }
}

@Component({
  selector: 'dialog-job',
  templateUrl: 'dialog-job.html',
})
export class DialogJob {

  constructor(
    public dialogRef: MatDialogRef<DialogJob>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
