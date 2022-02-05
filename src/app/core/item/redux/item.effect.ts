/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, catchError, switchMap } from 'rxjs/operators';
import { deleteItem, deleteItemError, deleteItemSuccess, loadItems, loadItemsError, loadItemsSuccess } from './item.actions';
import { of } from 'rxjs';
import { Item } from '../item.model';
import { ItemService } from '../api/item.service';
import { loadAppData } from '@core/app-redux/app.actions';


@Injectable()
export class ItemEffects {
    loadItems$ = createEffect( () => {
      return this.actions$.pipe(
        ofType(loadItems, loadAppData),
        switchMap(() => this.itemService.getItems().pipe(
          map( (items: Array<Item>) => loadItemsSuccess({items})),
          catchError(() => of(loadItemsError()))
        ))
      );
    }
  );

  deleteIem$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(deleteItem),
      switchMap((item) => this.itemService.deleteItem(item.item._id).pipe(
        map( (deletedItem: Item) => deleteItemSuccess({deletedItem})),
        catchError(() => of(deleteItemError()))
        ))
      );
    }
  );

  constructor(
    private actions$: Actions,
    private itemService: ItemService
  ) {}
}

