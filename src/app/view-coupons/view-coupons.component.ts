import { Component } from '@angular/core';
import { Coupon } from '../model/Coupon';
import { CouponServiceService } from '../service/coupon-service.service';

@Component({
  selector: 'app-view-coupons',
  templateUrl: './view-coupons.component.html',
  styleUrls: ['./view-coupons.component.css']
})
export class ViewCouponsComponent {
coupons:Coupon[]=[];
constructor(private service:CouponServiceService){
  this.showAllCoupons();
}
showAllCoupons(){
  this.service.findAll().subscribe((result)=>this.coupons=result);
}
}
