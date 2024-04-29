import { Component } from '@angular/core';
import { Account } from '../model/Account';
import { AccountService } from '../servcie/account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent {
  accounts: Account[] = [];

  constructor(private service: AccountService) {

  }
  showAllAccounts(){
    console.log("Before");
    this.service.findAll().subscribe((sucess) => console.log(this.accounts=sucess));
    console.log("Done");

  }
}
