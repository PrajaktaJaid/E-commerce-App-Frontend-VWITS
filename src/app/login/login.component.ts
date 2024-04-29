import { Component } from '@angular/core';

import { Customer } from '../model/Customer';
import { InmemoerycustomerService } from '../servcie/inmemoerycustomer.service';
import { CustomerrestserviceService } from '../servcie/customerrestservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private service: CustomerrestserviceService) {}

  performLoginOperation() {
    //let c = new Customer(this.username, this.password);
   this.service.performLogin(new Customer(this.username,this.password))
   .subscribe(result=>console.log(result))

   /**if (result) {
      console.log('login successfull');
    }
    else{
      console.log('login failed');
    }*/
     
  }
}
