import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { getDateFormat } from '../../utilities';
import { WorkinformationService } from '../workinformation.service';

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

  constructor(private WorkinformationService: WorkinformationService) {}

  ngOnInit(): void {
    this.WorkinformationService.getWorkInformation().subscribe(
      (workInformation) => {
        const localData = JSON.parse(JSON.stringify(workInformation));

        for (let i = 0; i < localData.length; i++) {
          localData[i].startDate = getDateFormat(localData[i].startDate);
          // Set the curerent role's end date to be "Present"
          if (localData[i] === localData[0]) {
            localData[i].endDate = 'Present';
          } else {
            localData[i].endDate = getDateFormat(localData[i].endDate);
          }
          localData[i].technologyUsed = localData[i].technologyUsed.split(',');
        }

        this.workInformation$ = of(localData);
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
