import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { map, catchError, switchMap } from "rxjs/operators";
import { loadOutfits, loadOutfitsError, loadOutfitsSuccess } from './outfit.actions';
import { of } from 'rxjs';
import { OutfitService } from '../outfit.service';
import { Outfit } from '../outfit.model';


@Injectable()
export class ItemEffects {
  loadOutfits$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOutfits),
      switchMap(() => this.outfitService.getOutfits().pipe(
        map( (outfits:Array<Outfit>) => loadOutfitsSuccess({outfits})),
        catchError(() => of(loadOutfitsError()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private outfitService: OutfitService
  ) {}
}