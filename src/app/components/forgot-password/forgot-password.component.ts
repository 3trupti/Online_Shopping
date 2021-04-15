import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  model:any=[];

  constructor() { }

  ngOnInit(): void {
  }
  ForgotPassData(forgotpassform:NgForm):void{
    console.log(forgotpassform.value);
  }

}
