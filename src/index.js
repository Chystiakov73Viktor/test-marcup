import {
  getrefs,
  handleFetchButtonClick,
  handleModalAction,
  handlePaginationClick,
  renderCards,
} from './helpers';
import { fetchData, clearResults, BASE_URL } from './helpers';

const refs = getrefs();
const pageCache = {};
let currentPageQuery = '';
const fetchButton = document.getElementById('fetchButton');
const errorMessage = document.getElementById('error-message');

const currentPageRef = { currentPage: 1 };
const queryRef = { query: '' };

async function fetchIngredients() {
  const url = `${BASE_URL}ingredients/search/`;
  const params = { f: queryRef.query, page: currentPageRef.currentPage };

  clearResults(refs.cardContainerEl);

  await fetchData(
    url,
    params,
    pageCache,
    currentPageRef.currentPage,
    currentPageQuery,
    queryRef.query,
    refs,
    renderCards,
    refs.cardContainerEl
  );
}

fetchIngredients();

const containerPagination = document.getElementById('pagination-elements');

containerPagination.addEventListener('click', e =>
  handlePaginationClick(e, fetchIngredients, currentPageRef)
);

fetchButton.addEventListener(
  'click',
  async () =>
    await handleFetchButtonClick(
      fetchIngredients,
      queryRef,
      currentPageRef,
      errorMessage, 
      'ingredients'
    )
);

refs.cardContainerEl.addEventListener('click', handleModalAction);
