import { Injectable } from '@angular/core';
import { Coupon } from '../model/Coupon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponServiceService {

  readonly BASE_URL = 'http://localhost:9090/coupon-service/coupon';

  constructor(private httpClient:HttpClient) { }
  
  creatNewCoupon(coupon:Coupon) {
    return this.httpClient.post(this.BASE_URL+'/create',coupon);
  }
  findAll(){
    return this.httpClient.get<Coupon[]>(this.BASE_URL+'/viewAll');
  }
}
