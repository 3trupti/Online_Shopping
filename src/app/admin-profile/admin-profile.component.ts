import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  model:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  RegisterData(regform:NgForm):void{
    console.log(regform.value);
  }

}
