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
 /* Login(name: string, pwd: string) {
    throw new Error('Method not implemented.');
  }*/
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

  Login(email:string, pwd:string):Observable<string>
  {
    return this.http.get<string>(this.url+'/'+'Login'+'/'+ email +'/'+ pwd);
  }

  InsertNewProduct(prod: UserInfoModule) : Observable<boolean>
  {
    const endpoint="http://localhost:57646/api/User/AddProduct";
    console.log("insideservice");
    return this.http.post<boolean>(endpoint,prod,this.httpOptions);
  }
  
 

  
}
