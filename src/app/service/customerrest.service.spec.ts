import { TestBed } from '@angular/core/testing';

import { CustomerrestService } from './customerrest.service';

describe('CustomerrestService', () => {
  let service: CustomerrestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerrestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
