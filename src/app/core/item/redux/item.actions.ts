import {createAction, props} from '@ngrx/store';
import { Item } from '../item.model';

export const loadItems = createAction('[Item List] Load Items');
export const loadItemsSuccess = createAction('[Item List] Load Items Success', props<{items: Item[]}>());
export const loadItemsError = createAction('[Item List] Load Items Error');

export const updateItemSuccess = createAction('[Item] Update Item Success', props<{item: Item}>());
export const updateItemError = createAction('[Item] Update Item Error');

export const createItemSuccess = createAction('[Item] Update Item Success', props<{item: Item}>());
export const createItemError = createAction('[Item] Update Item Error');

export const deleteItem = createAction('[Item] Delete Item', props<{item: Item}>());
export const deleteItemSuccess = createAction('[Item] Delete Item Success', props<{deletedItem: Item}>());
export const deleteItemError = createAction('[Item] Delete Item Error');
