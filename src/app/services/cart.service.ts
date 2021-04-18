import { Injectable } from '@angular/core';
//import{map} from 'rxjs';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
import{Observer} from 'rxjs';
import {HttpClient,HttpClientModule,JsonpClientBackend} from '@angular/common/http';
import {CartModule} from '../modules/cart/cart.module';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemCount =0;
  http:HttpClient;
  url:string='http://localhost:51110/api/User';
  httpOptions={Headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
  constructor(http:HttpClient) { this.http= http;}
}
