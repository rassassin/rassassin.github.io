import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectspageComponent } from './projectspage.component';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';

describe('ProjectspageComponent', () => {
  let component: ProjectspageComponent;
  let fixture: ComponentFixture<ProjectspageComponent>;

  beforeEach(async () => {
    let apolloSpy = jasmine.createSpyObj('Apollo', ['watchQuery']);

    await TestBed.configureTestingModule({
      imports: [ProjectspageComponent],
      providers: [{ provide: Apollo, useValue: apolloSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectspageComponent);
    component = fixture.componentInstance;
    apolloSpy.watchQuery.and.returnValue({
      valueChanges: of({}),
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
