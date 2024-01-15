import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { IProduct, ProductService } from 'src/app/services/product.service';
interface Pay {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})



export class OrderComponent implements OnInit {
  public totalPrice: any;
  public productsInCart: IProduct[];
  public selectedValue!: string;
  public form!: FormGroup;
  constructor(private productServ: ProductService, private rout: Router, private orderserv:OrderService) {
    this.totalPrice = 0;
    this.productsInCart = [];
  }

  ngOnInit(): void {
    this.productsInCart = this.productServ.cartProducts
    for (let i = 0; i < this.productsInCart.length; i++ ){
      this.totalPrice += this.productsInCart[i].price;
    }

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      payment: new FormControl('', [Validators.required]),
    });
  }


  payment: Pay[] = [
    {value: 'cash', viewValue: 'cash'},
    {value: 'card', viewValue: 'card'},

  ];

  submit() {
    if (this.form.invalid) {
      return;
    }
    const order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      adress: this.form.value.adress,
      payment: this.form.value.payment,
      orders: this.productsInCart,
      totalPrice: this.totalPrice,
      data: new Date(),

    }
    this.orderserv.create(order).subscribe(res => {
      this.form.reset();
      alert('Оформление заказа прошло успешно, ждите с вами свяжется наш оператор');
      this.rout.navigate(['/']);
    })

  }



}
