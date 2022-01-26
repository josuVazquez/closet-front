import {createAction, props} from '@ngrx/store';
import { Outfit } from '../outfit.model';

export const loadOutfits = createAction('[Outfit List] Load Outfits');
export const loadOutfitsSuccess = createAction('[Outfit List] Load Outfits Success', props<{outfits: Outfit[]}>());
export const loadOutfitsError = createAction('[Outfit List] Load Outfits Error');

export const updateOutfitSuccess = createAction('[Outfit List] Update Outfits Success', props<{outfit: Outfit}>());
export const updateOutfitError = createAction('[Outfit List] Update Outfit Error');