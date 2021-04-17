import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';

import {HttpClient} from '@angular/common/http';
import {Observer} from 'rxjs';

import {CategoryInfoModule} from '../modules/category-info/category-info.module';
import {ProductInfoModule} from '../modules/product-info/product-info.module';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  cate:CategoryInfoModule;
  http: HttpClient;
  url: string = 'http://localhost:57646/api/User';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
  constructor(http:HttpClient) { this.http = http }

}

 