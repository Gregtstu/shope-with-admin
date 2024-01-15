import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  create(obj:any):Observable<any>{
    return this.http.post<any>(`${environment.fbDbUrl}/orders.json`, obj)
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
    return this.http.get<any>(`${environment.fbDbUrl}/orders.json`)
      .pipe( map ( res => {

        return Object.keys(res)
          .map( key => ({
            ...res[key],
            id: key,
            data: new Date(res[key].data)
          }))
      }))
  }


  deleteProduct(id: string){
    return this.http.delete<any>(`${environment.fbDbUrl}/orders/${id}.json`);
  }



}
