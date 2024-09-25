import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GET_PROJECTS } from './graphql.operations';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private apollo: Apollo) {}

  getProjects(): Observable<any> {
    return this.apollo
      .watchQuery({
        query: GET_PROJECTS,
      })
      .valueChanges.pipe(map(({ data }: any) => data.projects));
  }
}
