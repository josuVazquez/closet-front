import {createAction, props} from '@ngrx/store';
import { Item } from '../item.model';

export const loadItems = createAction('[Item List] Load Items');
export const loadItemsSuccess = createAction('[Item List] Load Items Success', props<{items: Item[]}>());
export const loadItemsError = createAction('[Item List] Load Items Error');

export const updateItemSuccess = createAction('[Item List] Update Item Success', props<{item: Item}>());
export const updateItemError = createAction('[Item List] Update Item Error');
