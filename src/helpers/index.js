export { addToFavorites } from './addToFavorites';
export { fetchData, handlePageChange, clearResults, BASE_URL } from './apiFunctions';
export { createCardMarkup } from './cardMarkup';
export { checkAlco } from './checkAlco';
export { common } from './common';
export { customPaginationElement } from './element-pagination-custom';
export { handlePaginationClick, handleFetchButtonClick, handleCardContainerClick, handleModalAction } from './eventHandlers';
export { default as getrefs } from './getrefs';
export { noResultFavorCocktails } from './markupNoResultFavorCocktails';
export {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from './LocalStorageFunctions';
export { createModalContent } from './modalContentMarkup';
export { openModal } from './openModal';
export { removeFromFavorite } from './removeFromFavorite';
export {
  renderCardsFavorite,
  renderCards,
  renderCardsCocktails,
} from './renderCards';
export { trimText } from './trimText';
export { cardMarkupImg } from './markupCocktails';
export { toggleLoader, isPaginationRequired } from './pagination';
