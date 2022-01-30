import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadAppData } from '@core/app-redux/app.actions';
import { getAppList } from '@core/app-redux/app.selector';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  itemList$: Observable<any>;
  constructor(private store: Store) {
    this.store.dispatch(loadAppData());
    this.allList();
  }

  allList() {
    // this.itemList$ = this.store.select(getAppList);
    this.store.select(getAppList).subscribe(res => console.log(res));
  }

}
