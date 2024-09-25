import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { getRandomFloat } from '../../utilities';
import { ProjectService } from '../projects.service';

@Component({
  selector: 'app-projectspage',
  standalone: true,
  imports: [RouterModule, CommonModule, ModalComponent],
  templateUrl: './projectspage.component.html',
  styleUrl: './projectspage.component.css',
})
export class ProjectspageComponent implements OnInit {
  projects$: Observable<Array<any>> = of([]);
  error: any;
  randomDelaysForCards: Array<number> = [];

  constructor(
    private projectService: ProjectService,
    private dialogRef: MatDialog
  ) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      (projects) => {
        this.projects$ = of(projects);
        this.randomDelaysForCards = projects.map(() => getRandomFloat());
      },
      (error) => {
        this.error = error;
      }
    );
  }

  openDialog(projectData: any) {
    this.dialogRef.open(ModalComponent, {
      data: projectData,
    });
  }
}
