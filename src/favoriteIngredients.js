import {
  common,
  getItemFromLocalStorage,
  getrefs,
  noResultFavorCocktails,
  handleModalAction,
  removeFromFavorite,
  isPaginationRequired,
  toggleLoader,
  renderCardsFavorite,
} from './helpers';

const refs = getrefs();

if (!refs.list) {
  return;
}

const renderFavorites = favorites => {
  toggleLoader(refs.loader, 'hide');
  isPaginationRequired(
    favorites,
    refs.paginationRefFavorite,
    refs.list,
    refs.loader,
    renderCardsFavorite
  );
};

const getFavorites = getItemFromLocalStorage(common.KEY_BASKET_FAVORITES);
if (!getFavorites || getFavorites.length === 0) {
  noResultFavorCocktails(refs.list);
} else {
  renderFavorites(getFavorites);
}

refs.list.addEventListener('click', event => {
  handleModalAction(event, true);

  const closeButton = event.target.closest('.btn-svg__close');
  if (closeButton) {
    const id = closeButton.getAttribute('data-id');
    removeFromFavorite(id);
    const updatedFavorites = getItemFromLocalStorage(
      common.KEY_BASKET_FAVORITES
    );
    renderFavorites(updatedFavorites);
  }
});
