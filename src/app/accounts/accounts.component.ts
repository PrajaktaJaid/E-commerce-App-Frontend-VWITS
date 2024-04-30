import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
accounts: Account[]=[]
constructor(private service:AccountService){

}
showAllAccounts(){
   this.service.findAll().subscribe((result)=>this.accounts=result);
 }
}
