import { customPaginationElement } from "./element-pagination-custom";
import { noResultFavorCocktails } from "./markupNoResultFavorCocktails";

export const toggleLoader = (loader, action) => {
  loader.classList.toggle('d-none', action === 'hide');
};

export function isPaginationRequired(
  data,
  paginationRef,
  cardContainerEl,
  loader,
  renderFunction
) {
  toggleLoader(loader, 'hide');

  if (data.length === 0) {
    toggleLoader(loader, 'show');
    noResultFavorCocktails(cardContainerEl);
  } else if (data.length > 6) {
    paginationRef.classList.remove('visually-hidden');
    customPaginationElement(
      data,
      paginationRef,
      cardContainerEl,
      6,
      renderFunction
    );
  } else {
    paginationRef.classList.add('visually-hidden');
    renderFunction(data, cardContainerEl);
  }
  toggleLoader(loader, 'hide');
}
