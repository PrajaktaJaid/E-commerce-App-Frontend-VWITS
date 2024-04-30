import { Component } from '@angular/core';
import { InmemorycustomerService } from '../service/inmemorycustomer.service';
import { Customer } from '../model/Customer';
import { CustomerrestService } from '../service/customerrest.service';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private service:CustomerrestService,private router:Router){

}
username:string='';
password:string='';
successMessage:string='';
errorMessage:string='';
performSignIn(){
let loggedCustomer =new Customer(this.username,this.password);
this.service.performLogin(loggedCustomer).subscribe(result=>{this.router.navigate(['accounts'])});
// if(result){
//   this.errorMessage = '';
//    this.successMessage = 'Login successful ! Welcome back to VWITS SafeVault.';
//  }else{
//    this.successMessage = '';
//    this.errorMessage = 'Login Failed ! Please check username/password and try again'
//  }
//  this.username = '';
//  this.password = '';
}
}
