import { getOutfitList } from '@core/outfit/redux/oufit.selector';

export const getSelectedItem = state => state.selectedItem;
export const getItemList = state => state.itemList;

// export const getListData = (state) => ({
//     itemList: getItemList,
//     outfitList: getOutfitList
//   });

// export const selectShoppingCartItems = createSelector(
//     getItem,
//     getCartItemIds,
//     (products, itemIds) => itemIds.map(id => products[id])
// );
