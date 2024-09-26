import {
  getrefs,
  handleCardContainerClick,
  handleFetchButtonClick,
  handleModalAction,
  handlePaginationClick,
  renderCardsCocktails,
} from './helpers';
import { fetchData, clearResults, BASE_URL } from './helpers';

const refs = getrefs();
const pageCache = {};
let currentPageQuery = '';

const fetchButton = document.getElementById('fetchButton');
const errorMessage = document.getElementById('error-message');

const currentPageRef = { currentPage: 1 };
const queryRef = { query: '' };

async function fetchCocktails() {
  const url = `${BASE_URL}cocktails/search/`;
  const params = { f: queryRef.query, page: currentPageRef.currentPage };

  clearResults(refs.listCoctails);

  await fetchData(
    url,
    params,
    pageCache,
    currentPageRef,
    currentPageQuery,
    queryRef.query,
    refs,
    renderCardsCocktails,
    refs.listCoctails
  );
}

fetchCocktails();

const containerPagination = document.getElementById('pagination-elements');

containerPagination.addEventListener('click', e =>
  handlePaginationClick(e, fetchCocktails, currentPageRef)
);

fetchButton.addEventListener(
  'click',
  async () =>
    await handleFetchButtonClick(
      fetchCocktails,
      queryRef,
      currentPageRef,
      errorMessage,
      'cocktails'
    )
);
