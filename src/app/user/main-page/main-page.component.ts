import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {Data} from "@angular/router";
// import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public products$ = [
    {
  data:11.01,
  foto: 'string',
  information:'string',
  name:'string',
  price:'number',
  product: 'string',
  id:'string',
  type:'string',
}
  ]
  // constructor(public productServ: ProductService) { }

  ngOnInit(): void {
    // this.productServ.getAll().subscribe( res =>{
    //   this.products$ = res;
    // })
  }



}
