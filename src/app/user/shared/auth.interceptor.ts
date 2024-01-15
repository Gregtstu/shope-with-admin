import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Router } from "@angular/router";
import {
  catchError,
  Observable,
  throwError
} from "rxjs";
import { AuthService } from "src/app/services/auth.service";


@Injectable()
export class AuthIntercepotr implements HttpInterceptor{
  constructor(
    private auth: AuthService,
    private rout: Router
  ){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()){
      req = req.clone({
        setParams: {
          auth: `${this.auth.token}`
        }
      })
    }

    return next.handle(req)
      .pipe(
        catchError( error => {
          if (error === 401){
            this.auth.logout();
            this.rout.navigate(['/admin', 'login'])
          }
          return throwError(error)
        })
      )
  }
}
