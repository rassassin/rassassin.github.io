import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Apollo } from "apollo-angular";
import { Observable, of } from 'rxjs';
import { GET_WORKINFORMATION } from '../graphql.operations' 
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-aboutpage',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './aboutpage.component.html',
  styleUrl: './aboutpage.component.css'
})

export class AboutpageComponent {
  workInformation$: Observable<Array<any>> = of([]);
  technologyUsedMap:object = {};
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
      this.workInformation$ = of(data?.workcards);
      this.error = error
      
      // split technologyUsed string into an array of technologies for each job
      for(let i = 0; i < data.workcards.length; i++) {
      let technologyUsedArray = data.workcards[i].technologyUsed.split(",")
      this.technologyUsedMap[i] = []
       for(const technology of technologyUsedArray) {
        this.technologyUsedMap[i].push(technology)
       }
      }
    });
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.cursor.style.left = `${event.pageX - 10}px`;
    this.cursor.style.top = `${event.pageY - 10}px`;
  }
}