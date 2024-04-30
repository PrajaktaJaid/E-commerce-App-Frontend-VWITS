import { Injectable } from '@angular/core';
import { Account } from '../model/Account';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
readonly BASE_URL ="http://localhost:9090/bankapp/api/account"
accounts:Account[]=[]
  constructor(private http:HttpClient) { 

  }
  findAll(){
    // The data will fetch from server.
    // Interacting with server can takes sometime.
    // Hence we must make sure the call is not blocking which will affect user experience.
    // To avoid this we use observable.
    // Using observable, call become asynchronus(reactive)
    // of() from rxjs
    // of() return observable
    // observable allows a way to "subscribe" and receive data when events are emitted
    // setTimeout(()=>{return of(this.accounts)},2000)
    // return of([])
    let credentials="jaid:jaid";
    let encodeCredentials=btoa(credentials);
    let data='Basic '+encodeCredentials;
    let headers = new HttpHeaders().append('Authorization',data);
    return this.http.get<Account[]>(this.BASE_URL,{headers});
  }
  createNewAccount(a:Account){
   // TODO Remove Hardcoding of username and password
   // For every request we need to send credentials to server.
   // To send credentials to server we must have credentials on client side.
   
    let credentials="jaid:jaid";
    let encodeCredentials=btoa(credentials);
    let header='Basic '+encodeCredentials;
    let httpHeader = new HttpHeaders().append('Authorization',header);
    return this.http.post<Account>(this.BASE_URL,a,{headers:httpHeader});
  }
}
