import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddCouponComponent } from './add-coupon/add-coupon.component';
import { ViewCouponsComponent } from './view-coupons/view-coupons.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"create-a-coupon",component:AddCouponComponent},
  {path:"view-coupons",component:ViewCouponsComponent},
  {path:"place-order",component:PlaceOrderComponent},
  {path:"orders",component:OrderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
