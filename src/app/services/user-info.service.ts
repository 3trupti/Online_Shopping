import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Observer} from 'rxjs';
import {UserInfoModule} from '../modules/user-info/user-info.module';
import{Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  User:UserInfoModule
  http:HttpClient;
  url:string ='http://localhost:57646/api/UserApi';
  httpOptions={
    headers:new HttpHeaders({
    'Content-Type':'application/json'

  })
  };

  constructor(http:HttpClient) {this.http=http; }
  InsertCustomer(User:UserInfoModule):Observable<boolean>{
    return this.http.post<boolean>(this.url + "/" + "InsertCustomer", User, this.httpOptions);
  }

  InsertCustomer1(User:UserInfoModule):Observable<boolean>{
    return this.http.post<boolean>(this.url + "/" + "InsertCustomer1", User, this.httpOptions);
  }


  
}
