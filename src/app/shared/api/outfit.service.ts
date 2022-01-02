import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutfitService {

  backUrl = 'http://localhost:3000/outfit/';

  constructor(private http: HttpClient) { }

  getAllOutfits() {
    this.http.get(this.backUrl);
  }

  deleteOutfit(id: string) {
    this.http.delete(`${this.backUrl}delete/${id}`);
  }

  updateById(id: string, model: any) {
    this.http.put(`${this.backUrl}update/${id}`, model);
  }
}
