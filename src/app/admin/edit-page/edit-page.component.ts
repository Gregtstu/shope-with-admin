import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { IProduct, ProductService } from 'src/app/services/product.service';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  foods: Food[] = [
    { value: 'Phone', viewValue: 'Phone' },
    { value: 'Tablet', viewValue: 'Tablet' },
    { value: 'Laptop', viewValue: 'Laptop' },
  ];
  public form!: FormGroup;
  public product!: IProduct;
  constructor(private productServ: ProductService, private rout: Router, private activRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.activRout.params.pipe(
      switchMap(params =>{
        return this.productServ.getById(params['id']);
      })
    ).subscribe(product => {
      this.product = product;
      this.form = new FormGroup({
        product: new FormControl(this.product.product, [Validators.required]),
        name: new FormControl(this.product.name, [Validators.required]),
        foto: new FormControl(this.product.foto, [Validators.required]),
        information: new FormControl(this.product.information, [Validators.required]),
        price: new FormControl(this.product.price, [Validators.required]),
      });
    })
  }

    submit() {
      if (this.form.invalid) {
        return;
      }
    
      this.productServ.editProduct({
        ...this.product,
        product: this.form.value.product,
        name: this.form.value.name,
        foto: this.form.value.foto,
        information: this.form.value.information,
        price: this.form.value.price,
        data: new Date(),
      }).subscribe(res => {
        this.rout.navigate(['/admin', 'dashboard']);
      });
  
    }


}