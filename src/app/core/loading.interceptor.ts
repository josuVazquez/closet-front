import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './service/loader.service';

export const interceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (req.headers.has(interceptorSkipHeader)) {
      return next.handle(req);
    }
    // convert promise to observable using 'from' operator
    return from(this.handle(req, next));
  }

  async handle(req: HttpRequest<any>, next: HttpHandler) {
    await this.loaderService.showLoader();
    return next
        .handle(req)
        .pipe(finalize(async () => await this.loaderService.hideLoader())).toPromise();
  }
}
