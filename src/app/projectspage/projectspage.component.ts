import { AfterViewInit, Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Apollo } from "apollo-angular";
import { GET_POSTS } from '../graphql.operations' 
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ModalComponent } from "../modal/modal.component";
import { MatDialog } from '@angular/material/dialog'
import { getRandomFloat } from '../../utilities';

@Component({
  selector: 'app-projectspage',
  standalone: true,
  imports: [RouterModule, CommonModule, ModalComponent],
  templateUrl: './projectspage.component.html',
  styleUrl: './projectspage.component.css'
})

export class ProjectspageComponent implements OnInit {
  projects$: Observable<Array<any>> = of([]); 
  error: any;
  randomDelaysForCards:Array<number> = [];

  constructor(private apollo: Apollo, private dialogRef: MatDialog) { }


  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_POSTS
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.projects$ = of(data.projects);
      this.randomDelaysForCards = data.projects.map((_: any) => getRandomFloat())
      this.error = error
    });
  }

  openDialog(projectData: any) {
    this.dialogRef.open(ModalComponent, {
      data: projectData,
    });
  };
}
