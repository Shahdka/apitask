import { Iproduct } from './../iproduct';

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private  _ProductsService:ProductsService){}

  products:Iproduct[] = []

  ngOnInit(): void {
    this._ProductsService.getproducts().subscribe({
      next:(res)=>{
        this.products = res;
      },
      error:(err)=>{
        console.log(err)
      }

    })
      
  }
}
