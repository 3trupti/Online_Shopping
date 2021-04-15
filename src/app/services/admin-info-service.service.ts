import { Injectable } from '@angular/core';
import {from, Observable, Observer } from 'rxjs';
import {HttpClient, JsonpClientBackend} from '@angular/common/http';
import { AdminInfoModuleModule} from '../Modules/admin-info-module/admin-info-module.module';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminInfoServiceService {
  rel:AdminInfoModuleModule;
  http:HttpClient;
  url:string='http://localhost:57646/api/UserApi';
  httpOptions={headers: new HttpHeaders ({
    'content-Type':'application/Json'

  })
  }

  constructor(http:HttpClient) {
    this.http=http;
   }
   GetRetailors():Observable<AdminInfoModuleModule[]>{
     return this.http.get<AdminInfoModuleModule[]>(this.url+"/"+"AdminHome");
   }
   DeleteRetailer(id:number):Observable<boolean>{
     return this.http.delete<boolean>(this.url+"/"+"DeleteRetailer"+"/"+id);
   }
}
