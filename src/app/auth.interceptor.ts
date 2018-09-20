import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()

export class RequestInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService, private router: Router, private localStorage : LocalStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorage.retrieve('token');
    const ignoreUrl = "/Auth/login";
    console.log(request.url);
    console.log(request.url.search(ignoreUrl));
    if(request.url.search(ignoreUrl) === -1)
    {
      if (token) {
        request = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`)
        });
        if (!request.headers.has('Content-Type')) {
          request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        console.log(request.headers);
        console.log("Hi");
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 403) {
              this.router.navigate(['/userlogin/login']);
            }
          }
        }));
      }
      else {
        return next.handle(request);
      }
    }
  else {
    return next.handle(request);
  }
  }
}

      // request = request.clone({
      //   headers: request.headers.set('agentId', '1234')
      // })
      // request = request.clone({
      //   headers: request.headers.set('departmentId', '1')
      // })

            // request = request.clone({
      //   headers: request.headers.set('departmentId', '1')
      // })
      // console.log(request.headers);
      // console.log("");
