import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KebabMenuService {
  menuItems$ = new BehaviorSubject<any> ([]);

  setMenuItems(items) {
    this.menuItems$.next(items);
  }
}
