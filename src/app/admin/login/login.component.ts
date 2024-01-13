import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hide: boolean;
  public form!: FormGroup;
  constructor(
    public auth: AuthService,
    public rout: Router
  ) {
    this.hide = true;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  submit() {
    const user = {
      email: this.form.value.email,
      password: this.form.value.password,
      returnSecureToken: true,
    }
    this.auth.logIn(user).subscribe(res => { 
      this.rout.navigate(['/admin', 'orders']);  
    }, ()=> {
      alert('Не верно заполнен пароль или логин')
    });
  
  }

}