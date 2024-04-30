import { Injectable } from '@angular/core';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class InmemorycustomerService {
customers:Customer[]=[]
  constructor() { 
      // Declare array of customer with two customers
    
      let c1= new Customer("Prajakta","123");
      let c2= new Customer("jaid","123");
      this.customers.push(c1);
      this.customers.push(c2);
  }
  // write method to push the values to array
  registerCustomer(c:Customer){
    this.customers.push(c);
    console.log(this.customers);
  }
  // accept customer object from user and validate against data stored
  performSignIn(c:Customer){
    for(let cust of this.customers){
      if((cust.username === c.username) && (cust.password === c.password)){
        return true;
      }
    }
    return false;
  }
}
