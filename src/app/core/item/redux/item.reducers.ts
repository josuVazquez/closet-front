import { createReducer, on, State } from '@ngrx/store';
import { Item } from '../item.model';
import { loadItemsSuccess, updateItemSuccess } from './item.actions';

export interface ItemState {
  selectedItem: Item;
  itemList: Array<Item>;
}

export const initialItemState: ItemState = {
  selectedItem: new Item({}),
  itemList: []
};

export const itemReducer = createReducer(
  initialItemState,
  on(updateItemSuccess, (state, {item}): ItemState => ({
    ...state,
    selectedItem: new Item(item)
  })),
  on(loadItemsSuccess, (state, {items}): ItemState => ({
    ...state,
    itemList: [...items]
  }))
);
