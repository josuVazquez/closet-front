import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadItems } from '@core/item/redux/item.actions';
import { loadOutfits } from '@core/outfit/redux/outfit.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private store: Store) {
    this.store.dispatch(loadOutfits());
    this.store.dispatch(loadItems());
  }

}
