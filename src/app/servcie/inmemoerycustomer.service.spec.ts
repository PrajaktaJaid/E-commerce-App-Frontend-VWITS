import { TestBed } from '@angular/core/testing';

import { InmemoerycustomerService } from './inmemoerycustomer.service';

describe('InmemoerycustomerService', () => {
  let service: InmemoerycustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmemoerycustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
