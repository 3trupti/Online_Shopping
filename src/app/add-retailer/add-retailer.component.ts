import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-retailer',
  templateUrl: './add-retailer.component.html',
  styleUrls: ['./add-retailer.component.css']
})
export class AddRetailerComponent implements OnInit {

  model:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  Data(regform:NgForm):void{
    console.log(regform.value);
  }

}
