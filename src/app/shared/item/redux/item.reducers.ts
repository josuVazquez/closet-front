import { createReducer, on } from "@ngrx/store";
import { loadItemsSuccess, updateItemSuccess } from "./item.actions";

const initialState: any = {};

export const itemReducer = createReducer(
  initialState,
  on(updateItemSuccess, (state, {item}) => ({
    ...state,
    [item.id]: item
  })),
  on(loadItemsSuccess, (state, {items}) => items.reduce((acc, item) => ({
    ...acc,
    [item.id]: item
  }), {}))
);