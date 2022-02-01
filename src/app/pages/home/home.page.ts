import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadAppData } from '@core/app-redux/app.actions';
import { getAppList } from '@core/app-redux/app.selector';
import { KebabMenuService } from '@core/kebab-menu/kebab-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  itemList$: Observable<any>;
  menuItems = [
    { icon: 'add-circle-outline', description: 'Add Item', action: () => { this.goTo('new-item'); } },
    { icon: 'add-circle-outline', description: 'Add Outfit', action: () => { this.goTo('new-outfit'); } },
    { icon: 'trash-outline', description: 'Remove Item', action: () => { } }
  ];

  list: any;

  constructor(private store: Store,
    private menuService: KebabMenuService,
    private router: Router) {
    this.store.dispatch(loadAppData());
    this.list = this.store.select(getAppList);
    this.setKebabMenu();
  }

  setKebabMenu() {
    this.menuService.setMenuItems(this.menuItems);
  }

  goTo(path) {
    this.router.navigate([path]);
  }
}
