import { createReducer, on } from '@ngrx/store';
import { Outfit } from '../outfit.model';
import { loadOutfitsSuccess, updateOutfitSuccess } from './outfit.actions';

export interface OutfitState {
  selectedOutfit: Outfit;
  outfitList: Array<Outfit>;
}

export const initialOutfitState: OutfitState = {
  selectedOutfit: new Outfit(),
  outfitList: []
};

export const outfitReducer = createReducer(
  initialOutfitState,
  on(updateOutfitSuccess, (state, {outfit}): OutfitState => ({
    ...state,
    selectedOutfit: new Outfit(outfit)
  })),
  on(loadOutfitsSuccess, (state, {outfits}): OutfitState => ({
    ...state,
    outfitList: [...outfits]
  }))
);
