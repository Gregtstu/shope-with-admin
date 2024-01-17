import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductService} from 'src/app/services/product.service';
import {tap} from "rxjs";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit{
  public activeClass: string = '';

  constructor(private rout: Router, private servProduct: ProductService) {
  }

  ngOnInit(): void {
    this.servProduct.type.pipe(
      tap((item) => {
        this.activeClass = item
      })
    ).subscribe();
  }

  setType(product: string) {
    this.activeClass = product;
    this.servProduct.setType(product)
    if (product != 'Cart') {
      this.rout.navigate(['/'], {
        queryParams: {
          type: product,
        }
      })
    } else {
      this.rout.navigate(['/cart'], {
        queryParams: {
          type: product,
        }
      })
    }
  }
}
