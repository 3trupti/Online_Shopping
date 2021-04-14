
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {UserInfoService} from 'src/app/services/user-info.service';
import {UserInfoModule} from 'src/app/modules/user-info/user-info.module';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  svc:UserInfoService;
  name:string;
  pwd:string;
  role:string;
  model:any=[];
  ngzone: NgZone;
  router: Router;

  constructor(svc : UserInfoService, ngzone:NgZone, router:Router) {
    this.svc=svc;
    this.ngzone=ngzone;
    this.router=router;
  }

  ngOnInit(): void {
  }

  Login(LoginForm:NgForm):void{
    this.name =LoginForm.value.name;
    this.pwd=LoginForm.value.pwd;

    this.svc.Login(this.name,this.pwd).subscribe((data:string)=> {
    console.log(data);
    if(data=="Customer")
    {
      alert('Customer Login Successful');
      this.ngzone.run(()=>this.router.navigateByUrl('/CustomerHome'));
      
        
    }

    else if(data=="Retailer")
    {
      alert('Retailer Login Successful');
      this.ngzone.run(()=>this.router.navigateByUrl('/RetailerHome'));
    }

    else if(data=="Admin")
    {
      alert('Admin Login Successful');
      this.ngzone.run(()=>this.router.navigateByUrl('/AdminHome'));
    }

    else{
      alert('Invalid credentials');
    }


  });

  }


  

}

