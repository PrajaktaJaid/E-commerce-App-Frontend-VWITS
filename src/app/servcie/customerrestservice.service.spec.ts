import { TestBed } from '@angular/core/testing';

import { CustomerrestserviceService } from './customerrestservice.service';

describe('CustomerrestserviceService', () => {
  let service: CustomerrestserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerrestserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
