import { Component } from '@angular/core';
import { OrderList } from '../model/OrderList';
import { OrderServiceService } from '../service/order-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
orderList:OrderList[]=[];
constructor(private orderService:OrderServiceService){
  this.showOrders()
}
showOrders(){
  this.orderService.findAll().subscribe((result)=>this.orderList=result);
}
placeOrder(id:number){
this.orderService.updateOrderStatus(id,'DELIVERED').subscribe((resonse)=>{this.showOrders()});
}
cancelOrder(id:number){
  this.orderService.updateOrderStatus(id,'CANCELLED').subscribe((resonse)=>{this.showOrders()});
}
}
