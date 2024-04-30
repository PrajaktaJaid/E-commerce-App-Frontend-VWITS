import { Injectable } from '@angular/core';
import { Customer } from '../model/Customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerrestService {
readonly BASE_URL ="http://localhost:9090/bankapp/"
  constructor(private http:HttpClient) { }
  registerCustomer(c:Customer)
  {
    //send the customer to server
    //post method returns observable hence subscribe
   return this.http.post(this.BASE_URL+'api/customer',c);
  }
  performLogin(c:Customer){
   return this.http.post(this.BASE_URL+'api/customer/authentication',c);
  }
  performLogout(c:Customer){
    this.http.post(this.BASE_URL,c)

  }
}
