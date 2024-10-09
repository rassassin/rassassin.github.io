import { TestBed } from '@angular/core/testing';

import { CVInformationService } from './cvinformation.service';

describe('CVInformationService', () => {
  let service: CVInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CVInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
