import { Injectable } from '@angular/core';
import { Account } from '../model/Account';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  readonly BASE_URL = 'http://localhost:8081/api/account';

   accounts: Account[] = [];

  constructor(private http: HttpClient) {
    // let a1 = new Account(1, 1000, 'Payal', new Date());
    // let a2 = new Account(2, 2000, 'Shubham', new Date());
    // this.accounts.push(a1);
    // this.accounts.push(a2);
  }

  findAll(): Observable<Account[]> {
    //The data will be fetched from server
    //Interacting with server can take some time
    //Hence we must make sure the call is not blocking which will effect user experinece
    //To avoid this we should use observable
    //Using observable, call become asynchronous
    //of method return observable
    //Observable allows a way to "subscribe" and receive data when Events are emmitted
    // setTimeout(()=>{return of(this.accounts)},2000);
    //return of(this.accounts);
    //return of([]);
    let credentials="Jay:Jay";
    let encodedCredentials=btoa(credentials); //Encode to base64
    let data='Basic '+encodedCredentials //Basic authentiaction we are using
    let headers=new HttpHeaders().append('Authorization',data);
    return this.http.get<Account[]>(this.BASE_URL,{headers});
  }
  createNewAccount(a: Account) {
    //Todo Remove Hardcoding of username and passwordt
    //For every request we need to send credentials to 
    //To send credentials to srever we must have credentials on client side
    let credentials="Jay:Jay";
    let encodedCredentials=btoa(credentials); //Encode to base64
    let headers='Basic '+encodedCredentials //Basic authentiaction we are using
    let httpHeader=new HttpHeaders().append('Authorization',headers);
    return this.http.post<Account>(this.BASE_URL, a,{headers:httpHeader});
  }
}
