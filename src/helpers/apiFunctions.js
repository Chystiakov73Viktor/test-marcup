import axios from 'axios';
import { isPaginationRequired, toggleLoader } from './pagination';

const errorMessage = document.getElementById('error-message');

export const BASE_URL = 'https://drinkify.b.goit.study/api/v1/';

export async function fetchData(
  url,
  params,
  cache,
  currentPage,
  currentPageQuery,
  query,
  refs,
  renderFunction,
  container
) {
  if (cache[currentPage] && query === currentPageQuery) {
    const cachedData = cache[currentPage];
    renderFunction(cachedData, container); 
    return cachedData;
  }

  try {
    const response = await axios.get(url, { params });
    const data = response.data;

    if (!data || data.length === 0) {
      refs.paginationRef.classList.add('visually-hidden');
      toggleLoader(refs.loader, 'hide');
      return [];
    }

    cache[currentPage] = data;
    currentPageQuery = query;

    isPaginationRequired(
      data,
      refs.paginationRef,
      container,
      refs.loader,
      renderFunction
    );
    return data;
  } catch (error) {
     errorMessage.textContent = 'Не коректне значення'; 
    errorMessage.style.display = 'block';
    console.error('API request error:', error);
    refs.paginationRef.classList.add('visually-hidden');
    return [];
  } finally {
    toggleLoader(refs.loader, 'hide');
  }
}

export function clearResults(container) {
  if (container) {
    container.innerHTML = '';
  } else {
    console.error('Container is null or undefined');
  }
}

export async function handlePageChange(pageNumber, fetchFunction, currentPage) {
  if (pageNumber !== currentPage) {
    currentPage = pageNumber;
    await fetchFunction();
  }
}
