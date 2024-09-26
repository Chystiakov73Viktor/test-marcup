import { common } from './common';
import getrefs from './getrefs';
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from './LocalStorageFunctions';
import { isPaginationRequired } from './pagination';
import { renderCardsFavorite } from './renderCards';

const refs = getrefs();

const getFavorites = getItemFromLocalStorage(common.KEY_BASKET_FAVORITES);

export function removeFromFavorite(id) {
  const indexToRemove = getFavorites.findIndex(item => item.id === id);

  if (indexToRemove !== -1) {
    getFavorites.splice(indexToRemove, 1);
    setItemToLocalStorage(common.KEY_BASKET_FAVORITES, getFavorites);
  }
  isPaginationRequired(
    getFavorites,
    refs.paginationRefFavorite,
    refs.list,
    refs.loader,
    renderCardsFavorite
  );
}
