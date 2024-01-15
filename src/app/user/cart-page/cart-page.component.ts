
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { IProduct, ProductService } from 'src/app/services/product.service';

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
  constructor(private productServ: ProductService){ }

  ngOnInit(){
    this.productsInCart = this.productServ.cartProducts;
    this.displayedColumns = ['product', 'name', 'price', 'delete'];
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
}


