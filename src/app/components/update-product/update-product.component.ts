import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {ProductInfoModule} from '../../modules/product-info/product-info.module';
import {ProductService} from 'src/app/services/product.service';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  model:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
