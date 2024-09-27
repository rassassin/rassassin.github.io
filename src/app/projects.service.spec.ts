import { TestBed } from '@angular/core/testing';
import { ProjectService } from './projects.service';
import { Apollo } from 'apollo-angular';

describe('ProjectsService', () => {
  let service: ProjectService;
  let apolloSpy: jasmine.SpyObj<Apollo>;

  beforeEach(async () => {
    let spy = jasmine.createSpyObj('Apollo', ['watchQuery']);

    await TestBed.configureTestingModule({
      providers: [ProjectService, { provide: Apollo, useValue: spy }],
    }).compileComponents();

    service = TestBed.inject(ProjectService);
    apolloSpy = TestBed.inject(Apollo) as jasmine.SpyObj<Apollo>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
