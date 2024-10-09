import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { GET_CVINFORMATION } from './graphql.operations';

@Injectable({
  providedIn: 'root',
})
export class CVInformationService {
  constructor(private apollo: Apollo) {}

  getCVInformation(): Observable<any> {
    return this.apollo
      .watchQuery({
        query: GET_CVINFORMATION,
      })
      .valueChanges.pipe(map(({ data }: any) => data.cvDetails));
  }
}
