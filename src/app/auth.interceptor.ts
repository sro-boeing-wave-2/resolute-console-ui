import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()

export class RequestInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.loginService.getTokenForComponents();
    // const ignoreUrl = "/Auth/login";
    console.log(request.url);
    // console.log(request.url.search(ignoreUrl));
    // if(request.url.search(ignoreUrl) === -1)
    // {
    if (token['token']) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token['token']}`)
      });
      if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      }
      console.log(request);
      return next.handle(request);
    }
    else {
      console.log(request);
      return next.handle(request);
    }
  }
  // else {
  //   return next.handle(request);
  // }
  // }
}

