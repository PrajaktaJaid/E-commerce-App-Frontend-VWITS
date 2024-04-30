import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.css']
})

export class OpenAccountComponent {
  account=new Account();
  constructor(private service:AccountService){
  
  }
  openNewAccount(){
   // console.log(this.account)
   this.service.createNewAccount(this.account).subscribe(result=>this.service.accounts.push(result));
  }
}
