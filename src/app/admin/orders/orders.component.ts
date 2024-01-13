import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
// import { OrderService } from 'src/app/service/order.service';
// import { ProductService } from 'src/app/service/product.service';
import { UserData } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = [ 'name' , 'phone', 'adress', 'date', 'orders', 'payment', 'totalPrice', 'complite'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users


    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getAllProducts() {
    // this.orderServ.getAll()
    //   .subscribe({
    //     next: (res) => {
    //       this.dataSource = new MatTableDataSource(res);
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
    //     },
    //     error: () => {
    //       alert('error while product added');
    //     }
    //   });
  }

  deleteProduct(id: string){
    // this.orderServ.deleteProduct(id)
    //   .subscribe({
    //     next: (res) => {
    //       alert('Заказ удален!');
    //       this.getAllProducts();

    //     },
    //     error: () => {
    //       alert('На данный момент заказов нет!');
    //     }
    //   });
    }

}
