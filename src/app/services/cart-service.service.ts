import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
import{Observer} from 'rxjs';
import {HttpClient,HttpClientModule,JsonpClientBackend} from '@angular/common/http';
//import {CategoryInfoModule} from '../modules/category-info/category-info.module';
import {CartDisplayModule} from '../modules/cart-display/cart-display.module';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  id:number;
  CartD:CartDisplayModule;
  http:HttpClient;
  url:string='http://localhost:57646/api/UserC';
  httpOptions={Headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

  constructor(http:HttpClient) { this.http = http ;}


  GetCartDetails(id:number):Observable<CartDisplayModule[]>{
    return this.http.get<CartDisplayModule[]>(this.url +'/'+'GetCartDetails'+'/'+ id);
  }

  DeleteCart_Item(id:number):Observable<boolean>{
    return this.http.delete<boolean>(this.url+'/'+'DeleteCart_Item'+'/'+id);
  }
}
