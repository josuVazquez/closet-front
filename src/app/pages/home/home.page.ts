import { Component } from '@angular/core';
import { AppState } from '@capacitor/app';
import { Store } from '@ngrx/store';
import { loadItems } from '@shared/item/redux/item.actions';
import { loadOutfits } from '@shared/outfit/redux/outfit.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private store: Store<AppState>) {
    this.store.dispatch(loadOutfits());
    this.store.dispatch(loadItems());
  }
  
}
