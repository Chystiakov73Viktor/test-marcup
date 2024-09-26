import { createCardMarkup } from "./cardMarkup";
import { cardMarkupImg } from "./markupCocktails";
  
const cardMarkupFavorite = item => createCardMarkup(item, true);

export function renderCardsFavorite(data, container) {
  container.innerHTML = '';
  const dataForRender = data.map(cardMarkupFavorite).join('');
  container.insertAdjacentHTML('beforeend', dataForRender);
}

const cardMarkupHome = item => createCardMarkup(item, false);

export function renderCards(data, container) {
  const dataForRender = data.map(cardMarkupHome).join('');
  container.insertAdjacentHTML('beforeend', dataForRender);
}

export function renderCardsCocktails(data, container) {
  const dataForRender = data.map(cardMarkupImg).join('');
  container.insertAdjacentHTML('beforeend', dataForRender);
}
