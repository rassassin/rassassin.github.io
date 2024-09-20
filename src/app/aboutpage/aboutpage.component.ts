import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Apollo } from "apollo-angular";
import { Observable, of } from 'rxjs';
import { GET_WORKINFORMATION } from '../graphql.operations' 
import { CommonModule } from '@angular/common';
import { getDateFormat } from '../../utilities';



@Component({
  selector: 'app-aboutpage',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.css'
})

export class AboutpageComponent {
  workInformation$: Observable<Array<any>> = of([]);
  error: any;
  cursor: HTMLElement;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.cursor = document.createElement('div');
    this.cursor.classList.add('custom-cursor');
    document.body.appendChild(this.cursor);

    this.apollo.watchQuery({
      query: GET_WORKINFORMATION
    }).valueChanges.subscribe(({ data, error }: any) => {

      // Prevent readonly assignment error
      const localData = JSON.parse(JSON.stringify(data));

      // Split technologyUsed string into an array of technologies for each job
      for(let i = 0; i < localData?.workcards.length; i++) {
        localData.workcards[i].startDate = getDateFormat(localData?.workcards[i].startDate)
        localData.workcards[i].endDate = getDateFormat(localData?.workcards[i].endDate)
        localData.workcards[i].technologyUsed = localData?.workcards[i].technologyUsed.split(",")
      }

      this.workInformation$ = of(localData?.workcards);
      this.error = error
    });
  }
}