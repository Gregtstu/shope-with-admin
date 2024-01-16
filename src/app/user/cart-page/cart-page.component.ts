
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { IProduct, ProductService } from 'src/app/services/product.service';
import {Store} from "@ngrx/store";
import {clear, countSelector, decrease, increase, updatedAtSelector} from "../../reducers/counter";
import { map } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements AfterViewInit, OnInit {


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public productsInCart:IProduct[] = [];
  public totalPrice:any = 0
  public displayedColumns!: string[];
  public dataSource!: MatTableDataSource<IProduct>;
  public count$ = this.store.select(countSelector);
  public cannotDecrease$ = this.count$.pipe(map(count => count <= 1));
  constructor(private productServ: ProductService, private store:Store){ }

  ngOnInit(){
    this.productsInCart = this.productServ.cartProducts;
    this.displayedColumns = ['product', 'name', 'price', 'count', 'delete'];
    this.dataSource = new MatTableDataSource<IProduct>(this.productsInCart);
    for (let i = 0; i < this.productsInCart.length; i++) {
      this.totalPrice += this.productsInCart[i].price;
      this.deleteProduct;
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteProduct(element:any){
    this.totalPrice -= element.price;
    this.productsInCart = this.productServ.removeProductInCart(element.id);
    this.dataSource = new MatTableDataSource<IProduct>(this.productsInCart);
  }

  increase(): void {
    this.store.dispatch(increase());
  }
  decrease(): void {
    this.store.dispatch(decrease());
  }
  clear(): void {
    this.store.dispatch(clear());
  }
}


