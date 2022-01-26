import {Actions, createEffect, ofType} from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { map, catchError, switchMap } from "rxjs/operators";
import { loadItems, loadItemsError, loadItemsSuccess } from './item.actions';
import { of } from 'rxjs';
import { Item } from '../item.model';
import { ItemService } from '../api/item.service';


@Injectable()
export class ItemEffects {
    loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      switchMap(() => this.itemService.getItems().pipe(
        map( (items:Array<Item>) => loadItemsSuccess({items})),
        catchError(() => of(loadItemsError()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private itemService: ItemService
  ) {}
}