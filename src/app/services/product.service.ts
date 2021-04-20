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
  prod: ProductInfoModule;
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
Compare(cname:string):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'Compare'+'/'+cname);
}


GetProductByCategory(cname:string):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'GetProductsByCategoryName'+'/'+cname);
}

FilterByBrandName(bname:string,cname:string):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'SortByProductBrandName'+'/'+bname +'/'+ cname);
}

FilterByPrice(price:number,cname:string):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'SortByProductPrice'+'/'+price+'/'+cname);
}

SortByPrice(cname:string):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'SortByPrice'+'/'+cname);
}

SortByName(cname:string):Observable<ProductInfoModule[]>{
  return this.http.get<ProductInfoModule[]>(this.url +'/'+'SortByName'+'/'+cname);
}

//get product by id

GetProductId(id:number):Observable<ProductInfoModule>{
  return this.http.get<ProductInfoModule>(this.url +'/'+'GetProductById'+'/'+id);
}

UpdateProduct(id:number,newprod:ProductInfoModule):Observable<boolean>{
  return this.http.put<boolean>(this.url + "/UpdateProduct" + "/" + id  + newprod ,this.httpOptions);
}

DeleteProduct(id:number):Observable<boolean>{
  return this.http.delete<boolean>(this.url + '/DeleteProduct/' + id);
}

/*GetCurrentData(){
  return this.http.delete<boolean>(this.url+'/'+'DeleteProduct'+'/'+id);
}*/

AddToCart(id:number,email:string):Observable<string>{
  return this.http.post<string>(this.url+'/'+'AddToCart'+'/'+id+ "/" + email + "/" ,this.httpOptions);
}
}


