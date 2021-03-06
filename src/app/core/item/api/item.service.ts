import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from '@core/service/error-handler.service';
import { environment } from '@environment';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = environment.backUrl + '/item';
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }


  getItems() {
    return this.http.get(`${this.url}`).pipe(catchError(
    (error) => {
      this.errorHandler.genericError(error);
      return of();
    }));
  }

  newItem(item: any) {
    return this.http.post(`${this.url}/new`, item).pipe(catchError(
    (error) => {
      this.errorHandler.genericError(error);
      return of();
    }));
  }

  getItemById(id) {
    return this.http.get(`${this.url}/${id}`).pipe(catchError(
      (error) => {
        this.errorHandler.genericError(error);
        return of();
      }));
  }

  updateById(id: string, model: any) {
    return this.http.put(`${this.url}/update/${id}`, model);
  }

  deleteItem(id: string) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
}
