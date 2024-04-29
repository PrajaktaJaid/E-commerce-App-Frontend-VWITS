import { Component } from '@angular/core';
import { Customer } from '../model/Customer';
import { InmemoerycustomerService } from '../servcie/inmemoerycustomer.service';
import { CustomerrestserviceService } from '../servcie/customerrestservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
//This is dependency injection
c= new Customer('','');
  constructor(private service:CustomerrestserviceService){
    
  }
 
  //This method should be executed when user clicks register
  performRegistration() {
    //Create a customer object with these values of username and password
    alert(this.c.userName + '  ' + this.c.password);
   // let customer = new Customer(this.username, this.password);

    //ToDo Pass this customer object to server
    this.service.registerCustomer(this.c);
    //Component is responsible for UI and event binding only
    //Deal with data and calling backend rest calls or services is a different responsibility
    //hence angular recomends carry out this functionality use service
  }
}
