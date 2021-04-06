import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  model:any=[];
  constructor() { }

  ngOnInit(): void {
  }
  Data(regform:NgForm):void{
    console.log(regform.value);
  }


}
