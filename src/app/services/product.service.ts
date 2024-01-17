import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import {BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IProduct {
  data?:Data;
  foto?: string;
  information?:string;
  name?:string;
  price?:number;
  product?: string;
  id?:string;
  type?:string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public type:BehaviorSubject<string>;
  public cartProducts:IProduct[];
  constructor(private http: HttpClient) {
    this.cartProducts = [];
    this.type = new BehaviorSubject<string>('Phone');
  }

  create(obj:any):Observable<any>{
    return this.http.post<any>(`${environment.fbDbUrl}/products.json`, obj)
      .pipe(map(res => {
          return {
            ...obj,
            id: res.name,
            data: new Date(obj.data),
          }
        })
      );
  }

  getAll():Observable<any> {
    return this.http.get<any>(`${environment.fbDbUrl}/products.json`)
      .pipe( map ( res => {

        return Object.keys(res)
          .map( key => ({
            ...res[key],
            id: key,
            data: new Date(res[key].data)
          }))
      }))
  }


  getById(id:any):Observable<any> {
    return this.http.get<any>(`${environment.fbDbUrl}/products/${id}.json`)
      .pipe( map ( res => {
        return {
          ...res,
          id,
          data: new Date(res.data)
        }
      }));
  }

  deleteProduct(id: string){
    return this.http.delete<any>(`${environment.fbDbUrl}/products/${id}.json`);
  }

  editProduct(pruduct: IProduct){
    return this.http.patch<any>(`${environment.fbDbUrl}/products/${pruduct.id}.json`, pruduct);
  }

  setType(type:any){
    return this.type.next(type);
  }

  addProductInCart(product:IProduct){
    this.cartProducts.push(product);
  }

  removeProductInCart(id:IProduct){
    return this.cartProducts = this.cartProducts.filter(item => item.id != id);
  }

}
