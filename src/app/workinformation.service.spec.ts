import { TestBed } from '@angular/core/testing';

import { WorkinformationService } from './workinformation.service';
import { Apollo } from 'apollo-angular';
import { of } from 'rxjs';
import { GET_WORKINFORMATION } from './graphql.operations';

describe('WorkinformationService', () => {
  let service: WorkinformationService;
  let apolloSpy: jasmine.SpyObj<Apollo>;

  beforeEach(() => {
    let spy = jasmine.createSpyObj('Apollo', ['watchQuery']);

    TestBed.configureTestingModule({
      providers: [WorkinformationService, { provide: Apollo, useValue: spy }],
    });

    service = TestBed.inject(WorkinformationService);
    apolloSpy = TestBed.inject(Apollo) as jasmine.SpyObj<Apollo>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch work information', (done: DoneFn) => {
    const mockWorkInformation = {
      workcards: [
        {
          workCardTitle: 'Junior Software Engineer - MHR, PeopleFirst',
          workDescription:
            'Collaborated with front-end teams on the PeopleFirst web app to develop engaging and interactive user interfaces.',
          technologyUsed: 'Angular, RxJS, TypeScript, HTML and SCSS',
          organisationUrl: 'https://mhrglobal.com/uk/en/products/peoplefirst',
          startDate: '2024-09-01',
          endDate: '2024-09-02',
        },
        {
          workCardTitle: 'Software Apprentice Engineer - MHR, iTrent',
          workDescription:
            'Worked on the iTrent web app with the backend and front-end teams to create REST APIs and interactive UI.',
          technologyUsed: 'JavaScript, HTML & SCSS, SQL',
          organisationUrl: 'https://mhrglobal.com/uk/en/itrent',
          startDate: '2022-12-01',
          endDate: '2024-09-01',
        },
      ],
    };

    apolloSpy.watchQuery.and.returnValue({
      valueChanges: of({ data: mockWorkInformation }),
    } as any);

    service.getWorkInformation().subscribe((result) => {
      expect(result).toEqual(mockWorkInformation);
      done();
    });

    expect(apolloSpy.watchQuery).toHaveBeenCalledWith({
      query: GET_WORKINFORMATION,
    });
  });
});
