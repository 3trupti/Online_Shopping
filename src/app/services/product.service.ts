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
  url:string='http://localhost:57646/api/User';
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
GetProductById(email:string):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'GetProductsByRetailerID'+'/'+ email+"/");
}

GetProductByCategory(cname:string):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'GetProductsByCategoryName'+'/'+cname);
}

<<<<<<< HEAD
Compare(cname:string):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'Compare'+'/'+cname);
}

FilterByBrandName(bname:string):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'SortByProductBrandName'+'/'+bname);
=======
FilterByBrandName(bname:string,cname:string):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'SortByProductBrandName'+'/'+bname +"/" + cname);
>>>>>>> 834545385fa2c83e8068ad40c90a8c32e9c0778c
}

FilterByPrice(price:number):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'SortByProductPrice'+'/'+price);
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

AddToCart(id:number,email:string):Observable<string>{
  return this.http.post<string>(this.url+'/'+'AddToCart'+'/'+id+ "/" + email + "/" ,this.httpOptions);
}
}


