import { TestBed } from '@angular/core/testing';

import { CouponServiceService } from './coupon-service.service';

describe('CouponServiceService', () => {
  let service: CouponServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouponServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
