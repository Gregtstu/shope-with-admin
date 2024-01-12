import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import {IProduct, ProductService} from "../../services/product.service";


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  public productId:any = 1;
  public product: any;
  constructor( private productServe: ProductService, private rout: ActivatedRoute ) { }

  ngOnInit(): void {
    this.rout.params.subscribe(res => {
      // this.productId = res;
    });
    // this.productServe.getById(this.productId.id).subscribe(res => {
    //   this.product = res;
    // });
  }

  addProduct(product:IProduct){
    this.productServe.addProductInCart(product);
  }


}
