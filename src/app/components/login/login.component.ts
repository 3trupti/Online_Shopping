
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
  email:string;
  pwd:string;
  role:string;
  id:number;
  
  model:any=[];
  ngzone: NgZone;
  router: Router;

  constructor(svc : UserInfoService, ngzone:NgZone, router:Router) {
    this.svc=svc;
    this.ngzone=ngzone;
    this.router=router;
  }

  ngOnInit(): void {
    localStorage.clear();
    localStorage.setItem("reload","false");
    localStorage.setItem("sess","false");

  }

  Login(LoginForm:NgForm):void{
    
    this.email =LoginForm.value.txtemail;
    this.pwd=LoginForm.value.pwd;

    this.svc.Login(this.email,this.pwd).subscribe((data:string)=> {
    console.log(data);
    if(data=="Customer")
    {
      localStorage.setItem("sess","true");

      alert('Customer Login Successful');
      localStorage.setItem('Email',this.email);
      localStorage.setItem('TType',"Customer")

      this.ngzone.run(()=>this.router.navigateByUrl('/Home'));

      

      
        
    }

    else if(data=="Retailer")
    {
      localStorage.setItem("sess","true");
      alert('Retailer Login Successful');
      localStorage.setItem('Email',this.email);
      localStorage.setItem('TType',"Retailer")

      
      this.ngzone.run(()=>this.router.navigateByUrl('/Retailer_View'));
      
    }

    else if(data=="Admin")
    {
      localStorage.setItem("sess","true");
      alert('Admin Login Successful');
      localStorage.setItem('Email',this.email);

      this.ngzone.run(()=>this.router.navigateByUrl('/Admin_View'));
    }

    else{
      alert('Invalid credentials');
    }


  });

  }


  

}

