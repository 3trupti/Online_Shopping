import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import {Observer} from 'rxjs';
import {UserInfoModule} from '../modules/user-info/user-info.module';
import{Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
import {ProductInfoModule} from '../modules/product-info/product-info.module';

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

  //InsertNewProduct(prod: UserInfoModule) : Observable<boolean>
  InsertNewProduct(prod: UserInfoModule) : Observable<boolean>
  {
    const endpoint="http://localhost:57646/api/UserApi/AddProduct";
    console.log("insideservice");
    return this.http.post<boolean>(endpoint,prod,this.httpOptions);
  }
  

  GetCartID(email:string):Observable<number>{
    return this.http.get<number>(this.url+'/'+'GetCartID'+'/'+ email +'/');
    
  }

  DeleteProduct(id:number):Observable<boolean>{
    return this.http.delete<boolean>(this.url + "/DeleteProduct/" + id);
  }
 
  UpdateProduct(id:number,newprod:ProductInfoModule):Observable<boolean>{
    return this.http.put<boolean>(this.url + "/UpdateProduct" + "/" + id  , newprod ,this.httpOptions);
  }

  ProductAccept(prod:UserInfoModule):Observable<boolean>{
    const endpoint="http://localhost:57646/api/UserApi/ProductAccept";
    return this.http.post<boolean>(endpoint,prod,this.httpOptions);
  }

  ProductGet():Observable<ProductInfoModule[]>
{
  return this.http.get<ProductInfoModule[]>(this.url+'/'+'ProductGet');
}

ProdAcceptId(id:number):Observable<ProductInfoModule>{
  return this.http.get<ProductInfoModule>(this.url +'/'+'ProdAcceptId'+'/'+id);
}
  
AdminAddProduct(prod: UserInfoModule) : Observable<boolean>
  {
    const endpoint="http://localhost:57646/api/UserApi/AdminAddProduct";
    return this.http.post<boolean>(endpoint,prod,this.httpOptions);
  }


}
