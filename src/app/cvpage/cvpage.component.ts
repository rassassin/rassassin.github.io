import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CVInformationService } from '../cvinformation.service';
import { calculateYearsExperience, getDateFormat } from '../../utilities';
import { ProjectService } from '../projects.service';

@Component({
  selector: 'app-cvpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cvpage.component.html',
  styleUrl: './cvpage.component.css',
})
export class CvpageComponent {
  CVInformation$: Observable<Array<any>> = of([]);
  projectURLs: object = {};
  yearsOfExperience: number;
  randomFloat: number;
  error: any;
  constructor(
    private CVInformationService: CVInformationService,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.CVInformationService.getCVInformation().subscribe(
      (CVInformation) => {
        const localCVData = JSON.parse(JSON.stringify(CVInformation));
        this.yearsOfExperience = calculateYearsExperience(
          localCVData[localCVData.length - 1].jobStartDate
        );
        for (let i = 0; i < localCVData.length; i++) {
          localCVData[i].roleDetails = localCVData[i].roleDetails.split('#');
          localCVData[i].jobStartDate = getDateFormat(
            localCVData[i].jobStartDate
          );
          // Set the curerent role's end date to be "Present"
          if (localCVData[i] === localCVData[0]) {
            localCVData[i].jobEndDate = 'Present';
          } else {
            localCVData[i].jobEndDate = getDateFormat(
              localCVData[i].jobEndDate
            );
          }
        }
        this.CVInformation$ = of(localCVData);
      },
      (error) => {
        this.error = error;
      }
    );

    this.projectService.getProjects().subscribe(
      (projects) => {
        for (const project of projects) {
          if (
            project.title === 'Weather App' ||
            project.title === 'Immune system simulation'
          ) {
            this.projectURLs[project.title] = project.url;
          }
        }
      },
      (error) => {
        this.error = error;
      }
    );
  }

  openPDF() {
    window.print();
  }
}
