import { Component } from '@angular/core';
import { Customer } from '../model/Customer';
import { CustomerrestService } from '../service/customerrest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  customer= new Customer('','');
  // This is dependency injection
  constructor(private service:CustomerrestService){
  
  }
  // username:string='';
  // password:string='';
  successMessage:string='';
  errorMessage:string='';
// this method executed when users clicks register buttom in html
  performRegistration(){
  
  //Create a customer object with these values of username and password
 
  let result=this.service.registerCustomer(this.customer).subscribe(result=>console.log(result));
 if(result){
   this.errorMessage = '';
   this.successMessage = 'Registration successful !';
 }else{
   this.successMessage = '';
   this.errorMessage = 'Registration Failed !'
 }
  //TODO pass this data to server
  // Component is responsible for only UI and event binding.
  // Dealing with data and calling backend rest calls or services is a different responsibility hence angular recommends
  // carry out this function
}
}
