import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CVInformationService } from '../cvinformation.service';
import { getDateFormat } from '../../utilities';

@Component({
  selector: 'app-cvpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cvpage.component.html',
  styleUrl: './cvpage.component.css',
})
export class CvpageComponent {
  CVInformation$: Observable<Array<any>> = of([]);
  error: any;
  constructor(private CVInformationService: CVInformationService) {}

  ngOnInit() {
    this.CVInformationService.getCVInformation().subscribe(
      (CVInformation) => {
        const localData = JSON.parse(JSON.stringify(CVInformation));
        console.log(localData);
        for (let i = 0; i < localData.length; i++) {
          localData[i].roleDetails = localData[i].roleDetails.split('#');
          localData[i].jobStartDate = getDateFormat(localData[i].jobStartDate);
          // Set the curerent role's end date to be "Present"
          if (localData[i] === localData[0]) {
            localData[i].jobEndDate = 'Present';
          } else {
            localData[i].jobEndDate = getDateFormat(localData[i].jobEndDate);
          }
        }
        this.CVInformation$ = of(localData);
      },
      (error) => {
        this.error = error;
      }
    );
  }
}
