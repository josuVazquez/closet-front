import { createReducer, on } from "@ngrx/store";
import { loadOutfitsSuccess, updateOutfitSuccess } from "./outfit.actions";

const initialState: any = {};

export const itemReducer = createReducer(
  initialState,
  on(updateOutfitSuccess, (state, {outfit}) => ({
    ...state,
    [outfit.id]: outfit
  })),
  on(loadOutfitsSuccess, (state, {outfits}) => outfits.reduce((acc, outfit) => ({
    ...acc,
    [outfit.id]: outfit
  }), {}))
);