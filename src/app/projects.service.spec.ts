import { TestBed } from '@angular/core/testing';
import { ProjectService } from './projects.service';
import { Apollo } from 'apollo-angular';

describe('ProjectsService', () => {
  let service: ProjectService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectService, Apollo],
    }).compileComponents();
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
