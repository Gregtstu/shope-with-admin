import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

export interface IProducts {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  public form!: FormGroup;
  public products: IProducts[] = [
    { value: 'Phone', viewValue: 'Phone' },
    { value: 'Tablet', viewValue: 'Tablet' },
    { value: 'Laptop', viewValue: 'Laptop' },
  ];

 
  constructor( 
    private productServ: ProductService,
    private rout: Router
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      product: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      foto: new FormControl('', [Validators.required]),
      information: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const product = {
      product: this.form.value.product,
      name: this.form.value.name,
      foto: this.form.value.foto,
      information: this.form.value.information,
      price: this.form.value.price,
      data: new Date(),
    }

    this.productServ.create(product).subscribe(res => {
      this.form.reset();
      this.rout.navigate(['/']);
    });

  }
}
