import sprite from '../images/sprite.svg';
import { checkAlco } from './checkAlco';
import { trimText } from './trimText';

export function createCardMarkup(el, isFavoritesPage) {
  const dataIdAttribute = isFavoritesPage ? `data-id="${el.id}"` : `data-id="${el._id}"`;

  return `
    <li class="favor-ingred__card-item" ${dataIdAttribute}>
      <h2 class="favor-ingred__title-name">${el.title}</h2>
      <p class="favor-ingred__text-alcoe">${checkAlco(el.alcohol)}</p>
      <p class="favor-ingred__text-descr">${trimText(el.description, 100)}</p>
      <div class="card__button-icon">
        <button class="card__close card__close-action" type="button" 
          ${dataIdAttribute}
          data-title="${el.title}"
          data-alcohol="${el.alcohol}"
          data-description="${el.description.replace(/['"]+/g, '')}"
          data-type="${el.type}"
          data-country="${el.country}" 
          data-alcohol-volume="${el.abv}" 
          data-flavour="${el.flavour}">learn more</button>
        <button class="btn-svg__close" ${dataIdAttribute} type="button">
          <svg class="favor-ingred__svg" >
            <use href="${sprite}#icon-trash"></use>
          </svg>
        </button>
      </div>
    </li>
  `;
}
