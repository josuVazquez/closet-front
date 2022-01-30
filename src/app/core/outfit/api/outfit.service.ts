import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interceptorSkipHeader } from '@core/loading.interceptor';
import { ErrorHandlerService } from '@core/service/error-handler.service';
import { environment } from '@environment';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OutfitService {

  url = environment.backUrl + '/outfit';
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  getOutfits() {
    const headers = new HttpHeaders().set(interceptorSkipHeader, '');
    return this.http.get(`${this.url}`, {headers}).pipe(catchError(
    (error) => {
      this.errorHandler.genericError(error);
      return of();
    }));
  }

  deleteOutfit(id: string) {
    const headers = new HttpHeaders().set(interceptorSkipHeader, '');
    this.http.delete(`${this.url}delete/${id}`, {headers});
  }

  updateById(id: string, model: any) {
    const headers = new HttpHeaders().set(interceptorSkipHeader, '');
    this.http.put(`${this.url}update/${id}`, model, {headers});
  }

  getOutfitById(id) {
    const headers = new HttpHeaders().set(interceptorSkipHeader, '');
    return this.http.get(`${this.url}/${id}`, {headers}).pipe(catchError(
      (error) => {
        this.errorHandler.genericError(error);
        return of();
      }));
  }

  newOutfit(outFit: any) {
    const headers = new HttpHeaders().set(interceptorSkipHeader, '');
    return this.http.post(`${this.url}/new`, outFit, {headers}).pipe(catchError(
    (error) => {
      this.errorHandler.genericError(error);
      return of();
    }));
  }

}
