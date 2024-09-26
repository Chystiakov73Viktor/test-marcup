import { common } from './common';

export function addToFavorites(elementData) {
  if (!elementData) {
    return;
  }
  
  const favorites = JSON.parse(localStorage.getItem(common.KEY_BASKET_FAVORITES)) ?? [];
  
  const isAlreadyFavorite = favorites.some(favorite => favorite.id === elementData.id);
  
 
  if (!isAlreadyFavorite) {
    favorites.push(elementData);
    localStorage.setItem(common.KEY_BASKET_FAVORITES, JSON.stringify(favorites));
  }
}
