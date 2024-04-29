import { Injectable } from '@angular/core';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() { }

  registerCustomer(customer:Customer){
   //Send the customer to server
   }
}
