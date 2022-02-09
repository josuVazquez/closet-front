import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const user = JSON.parse(localStorage.getItem('user'));
      const token  = user.stsTokenManager.accessToken;
      let request = req;

      if (token) {
        request = req.clone({
          setHeaders: {
            authorization: `Bearer ${ token }`
          }
        });
      }

      return next.handle(request);
    }
}
