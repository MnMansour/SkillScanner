import { Injectable } from '@angular/core';
import { Job} from '../shared/job';
import { JOBS } from '../shared/jobs';

@Injectable()
export class JobService {

  constructor() { }
  getJobs(): Job[] {
    return JOBS;
  };
}
