import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KebabMenuService {
  menuShow$ = new BehaviorSubject<boolean> (false);
  menuItems$ = new BehaviorSubject<any> ([]);

  openMenu() {
    this.menuShow$.next(true);
  }

  closeMenu() {
    this.menuShow$.next(false);
  }

  setMenuItems(items) {
    this.menuItems$.next(items);
  }
}
