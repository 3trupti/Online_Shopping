import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/observable';
import {HttpHeaders} from '@angular/common/http';
import{Observer} from 'rxjs';
import {HttpClient,HttpClientModule,JsonpClientBackend} from '@angular/common/http';
//import {CategoryInfoModule} from '../modules/category-info/category-info.module';
import {ProductInfoModule} from '../modules/product-info/product-info.module';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prod:ProductInfoModule;
  http:HttpClient;
  url:string='http://localhost:51110/api/User';
  httpOptions={Headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

constructor(http:HttpClient) { this.http = http ;}

InsertNewProduct(prod: ProductInfoModule) : Observable<boolean>
{
  return this.http.post<boolean>(this.url+'/'+'AddProducts',prod);
}


GetProductInfo():Observable<ProductInfoModule[]>
{
  return this.http.get<ProductInfoModule[]>(this.url+'/'+'GetAllProducts');
}
GetProductById(id:number):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'GetProductsByRetailerID'+'/'+id);
}
/*UpdateProduct(id:number,prod:ProductInfoModule):Observable<boolean>{
  return this.http.put<boolean>(this.url +"/UpdateProduct/",id,this.httpOptions);
}*/
DeleteProduct(id:number):Observable<boolean>{
  return this.http.delete<boolean>(this.url+'/'+'DeleteProduct'+'/'+id);
}
/*GetCurrentData(){
  return this.http.delete<boolean>(this.url+'/'+'DeleteProduct'+'/'+id);
}*/

}


