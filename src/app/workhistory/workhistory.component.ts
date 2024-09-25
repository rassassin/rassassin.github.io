import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { GET_WORKINFORMATION } from '../graphql.operations';
import { CommonModule } from '@angular/common';
import { getDateFormat } from '../../utilities';

@Component({
  selector: 'app-workhistory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workhistory.component.html',
  styleUrl: './workhistory.component.css',
})
export class WorkhistoryComponent {
  workInformation$: Observable<Array<any>> = of([]);
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: GET_WORKINFORMATION,
      })
      .valueChanges.subscribe(({ data, error }: any) => {
        // Prevent readonly assignment error
        const localData = JSON.parse(JSON.stringify(data));

        // Split technologyUsed string into an array of technologies for each job
        for (let i = 0; i < localData?.workcards.length; i++) {
          localData.workcards[i].startDate = getDateFormat(
            localData?.workcards[i].startDate
          );
          // Set the curerent role's end date to be "Present"
          if (localData.workcards[i] === localData.workcards[0]) {
            localData.workcards[i].endDate = 'Present';
          } else {
            localData.workcards[i].endDate = getDateFormat(
              localData?.workcards[i].endDate
            );
          }
          localData.workcards[i].technologyUsed =
            localData?.workcards[i].technologyUsed.split(',');
        }

        this.workInformation$ = of(localData?.workcards);
        this.error = error;
      });
  }
}
