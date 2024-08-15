 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient : HttpClient) { };






getproducts():Observable<any>
{
  return this._HttpClient.get('https://fakestoreapi.com/products')
}







}