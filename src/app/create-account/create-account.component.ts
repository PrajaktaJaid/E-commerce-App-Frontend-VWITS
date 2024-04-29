import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { AccountService } from '../servcie/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(private service:AccountService){}
  a= new Account();

  createNewAccount(){
    console.log(this.a);
    this.service.createNewAccount(this.a).subscribe(result=>this.service.accounts.push(result));
  }

}
