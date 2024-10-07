import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cvpage',
  standalone: true,
  imports: [],
  templateUrl: './cvpage.component.html',
  styleUrl: './cvpage.component.css',
})
export class CvpageComponent {
  CVInformation$: Observable<Array<any>> = of([]);
  error: any;
  constructor(/*CVService*/) {}

  ngOnInit() {
    //   this.CVService.getWorkInformation().subscribe(
    //     (CVInformation) => {
    //       const localData = JSON.parse(JSON.stringify(CVInformation));
    //       for (let i = 0; i < localData.length; i++) {
    //         localData[i].roleResponsibilities =
    //           localData[i].roleResponsibilities.split(',');
    //       }
    //       this.CVInformation$ = of(localData);
    //     },
    //     (error) => {
    //       this.error = error;
    //     }
    //   );
  }
}
