import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerrestserviceService {
  readonly BASE_URL="http://localhost:8081";
  //readonly BASE_URL="http://localhost:9090/bankapp/api/customer";


  constructor(private http:HttpClient) { }

  registerCustomer(c:Customer){
    //Send the customer to server
    return this.http.post(this.BASE_URL+'/api/customer',c).subscribe();
    console.log(c);
  }

  performLogin(c:Customer){
     return this.http.post(this.BASE_URL+'/api/customer',c);
  }
}
