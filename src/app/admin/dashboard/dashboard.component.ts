import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';

export interface UserData {
  id?: string;
  name?: string;
  price?: string;
  open?: string;
  delete?: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'date', 'open', 'delete'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public productDerv: ProductService) {
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
    this.productDerv.getAll()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: () => {
          alert('error while product added');
        }
      });
  }

  deleteProductt(id: string){
    this.productDerv.deleteProduct(id)
      .subscribe({
        next: (res) => {
          alert('Product deleted sucsessful');
          this.getAllProducts();

        },
        error: () => {
          alert('error while product deleting');
        }
      });
    }

}
