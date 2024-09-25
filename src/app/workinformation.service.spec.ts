import { TestBed } from '@angular/core/testing';

import { WorkinformationService } from './workinformation.service';

describe('WorkinformationService', () => {
  let service: WorkinformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkinformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
