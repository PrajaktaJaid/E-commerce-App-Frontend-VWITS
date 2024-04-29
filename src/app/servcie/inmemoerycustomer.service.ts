import { Injectable } from '@angular/core';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class InmemoerycustomerService {
customers:Customer[]=[];
  constructor() {

    let c1= new Customer("Prajakta","123");
    let c2= new Customer("ABC","abc");
    this.customers.push(c1);
    this.customers.push(c2);
   }
   //Write a method to push values to array

   registerCustomer(customer:Customer){
    this.customers.push(customer);
    console.log(this.customers);
   }
//Accept Customer object from user and validate against data store
   performLogin(c:Customer){
for(let cust of this.customers){
  if(cust.userName===c.userName && cust.password===c.password){
  return true;
  }
}
return false;
   }
}
