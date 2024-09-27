import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectspageComponent } from './projectspage.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

describe('ProjectspageComponent', () => {
  let component: ProjectspageComponent;
  let fixture: ComponentFixture<ProjectspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProjectspageComponent,
        RouterModule,
        CommonModule,
        ModalComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
