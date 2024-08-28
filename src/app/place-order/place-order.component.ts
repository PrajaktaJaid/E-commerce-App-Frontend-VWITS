import { Component, OnInit } from '@angular/core';
import { CouponServiceService } from '../service/coupon-service.service';
import { Coupon } from '../model/Coupon';
import { OrderServiceService } from '../service/order-service.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit{
  
    items = [{id:1, name:'Chocalate',price:100},{id:2, name:'Biscuit',price:200},{id:3, name:'Shoes',price:300}]
    selectedItem: any;
    selectedPrice: number=0;
    couponsList:Coupon[]=[];
    selectedCouponCode: any;
    successMessage: string= '';
    errorMessage:string= '';
    constructor(private couponService:CouponServiceService,private orderService:OrderServiceService){};
    ngOnInit(): void {
      this.getCoupons();
    }

    updatePrice(): void{
      this.selectedCouponCode = {};
      if(this.selectedItem){
        console.log(this.selectedItem)
        this.selectedPrice=this.selectedItem.price;
      }else{
        this.selectedPrice=0;
      }
    }
    getCoupons(){
      this.couponService.findAll().subscribe((response)=>{this.couponsList=response})
    }
    applyDiscount(){
      if(this.selectedCouponCode){
        this.selectedPrice = this.selectedPrice-(this.selectedPrice*this.selectedCouponCode.discount/100)
      }
    }
    placeOrder():void{
      if(this.selectedItem){
        const status ="CONFIRMED";
        const orderData={
          item:this.selectedItem.name,
          price:this.selectedPrice,
          status:status,
          couponCode:this.selectedCouponCode.couponCode
        }
        console.log(orderData)
        this.orderService.placeOrder(orderData).subscribe(
          (response)=>{this.successMessage='Order Placed Successfully';
            this.errorMessage='';
          },
          (error)=>{this.errorMessage='Error placing order: ';
            this.successMessage='';
          }
        )
      }
    }
}
