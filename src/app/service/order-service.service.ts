import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderList } from '../model/OrderList';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  readonly BASE_URL = 'http://localhost:9090/order-service/order';
  constructor(private http:HttpClient) { }

  placeOrder(orderData:any):Observable<any>{
    return this.http.post<any>(this.BASE_URL+'/place',orderData);
  }

  findAll(){
    return this.http.get<OrderList[]>(this.BASE_URL+'/viewAll');
  }
  updateOrderStatus(orderId:number,orderStatus:string):Observable<any>{
    return this.http.put<any>(`${this.BASE_URL}/${orderId}/updateStatus?status=${orderStatus}`,{});
  }
}

