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
    return this.http.get(`${this.url}`).pipe(catchError(
    (error) => {
      this.errorHandler.genericError(error);
      return of();
    }));
  }

  deleteOutfit(id: string) {
    this.http.delete(`${this.url}/delete/${id}`);
  }

  updateById(id: string, model: any) {
    return this.http.put(`${this.url}/update/${id}`, model);
  }

  getOutfitById(id) {
    return this.http.get(`${this.url}/${id}`).pipe(catchError(
      (error) => {
        this.errorHandler.genericError(error);
        return of();
      }));
  }

  newOutfit(outFit: any) {
    return this.http.post(`${this.url}/new`, outFit).pipe(catchError(
    (error) => {
      this.errorHandler.genericError(error);
      return of();
    }));
  }

}
