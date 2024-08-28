import { Component } from '@angular/core';
import { Coupon } from '../model/Coupon';
import { CouponServiceService } from '../service/coupon-service.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent {
constructor(private service:CouponServiceService){}
coupon:Coupon={couponCode:'',discount:0}
successMessage: string= '';
errorMessage:string= '';
createCoupon(){
    this.service.creatNewCoupon(this.coupon).subscribe((res)=>{
      this.successMessage='Coupon Created Successfully';
      this.errorMessage='';
    },(err)=>{
      this.errorMessage='Coupon code already exist,please use unique name to proceed';
      this.successMessage='';
    });
  }
}
