import {Component, OnInit} from '@angular/core';
import {ProductService} from 'src/app/services/product.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public products$!: any;

  public type: any;

  constructor(public productServ: ProductService) {
  }

  ngOnInit(): void {
    this.productServ.getAll().subscribe(res => {
      this.products$ = res;
    })

    this.productServ.type.subscribe(res => {
        this.type = res;
      }
    )
  }


}
