import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from "@angular/core";
import { map, catchError, switchMap } from "rxjs/operators";
import { loadOutfits, loadOutfitsError, loadOutfitsSuccess } from './outfit.actions';
import { of } from 'rxjs';
import { Outfit } from '../outfit.model';
import { OutfitService } from '../api/outfit.service';


@Injectable()
export class OutfitEffects {
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