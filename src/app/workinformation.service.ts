import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GET_WORKINFORMATION } from './graphql.operations';

@Injectable({
  providedIn: 'root',
})
export class WorkinformationService {
  constructor(private apollo: Apollo) {}

  getWorkInformation(): Observable<any> {
    return this.apollo
      .watchQuery({
        query: GET_WORKINFORMATION,
      })
      .valueChanges.pipe(map(({ data }: any) => data.workcards));
  }
}
