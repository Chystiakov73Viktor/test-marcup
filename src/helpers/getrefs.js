export default function getrefs() {
  return {
    cardContainerEl: document.querySelector('.favor-ingred__gallery'),
    list: document.querySelector('.js-list_second_page'),
    listCoctails: document.querySelector('.cocktails__gallery'),
    paginationRef: document.querySelector('#pagination-elements'),
    loader: document.querySelector('.loader'),
    paginationRefFavorite: document.querySelector('#pagination-favorite'),
  };
}
