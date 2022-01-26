import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterceptorSkipHeader } from '@core/loading.interceptor';
import { ErrorHandlerService } from '@core/service/error-handler.service';
import { environment } from '@environment';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = environment.backUrl + '/item'
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  
  getItems() {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.http.get(`${this.url}`, {headers}).pipe(catchError(
    (error) => {
      this.errorHandler.genericError(error);
      return of();
    }));
  }

  newItem(item: any) {
    const headers = new HttpHeaders().set(InterceptorSkipHeader, '');
    return this.http.post(`${this.url}/new`, item, {headers}).pipe(catchError(
    (error) => {
      this.errorHandler.genericError(error);
      return of();
    }));
  }
}
