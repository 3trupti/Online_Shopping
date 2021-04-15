import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
import{Observer} from 'rxjs';
import {HttpClient,HttpClientModule} from '@angular/common/http';
//import {CategoryInfoModule} from '../modules/category-info/category-info.module';
import {RetailerInfoModule} from '../modules/retailer-info/retailer-info.module';
import { ProductInfoModule } from '../modules/product-info/product-info.module';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {
  rel:RetailerInfoModule;
  http:HttpClient;
  url:string='http://localhost:57646/api/User';
  httpOptions={header:new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


  constructor(http:HttpClient) { this.http = http ;}
}
