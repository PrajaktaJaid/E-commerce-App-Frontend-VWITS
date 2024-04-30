import { TestBed } from '@angular/core/testing';

import { InmemorycustomerService } from './inmemorycustomer.service';

describe('InmemorycustomerService', () => {
  let service: InmemorycustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmemorycustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
