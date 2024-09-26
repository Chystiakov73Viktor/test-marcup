import { handlePageChange } from "./apiFunctions";
import { openModal } from "./openModal";

export function handlePaginationClick(e, fetchIngredients, currentPageRef) {
  if (e.target.classList.contains('js-pagination-btn')) {
    const pageNumber = parseInt(e.target.dataset.page);
    currentPageRef.currentPage = pageNumber;  
    handlePageChange(pageNumber, fetchIngredients, currentPageRef.currentPage);
  }
}

export async function handleFetchButtonClick(fetchDataFunction, queryRef, currentPageRef, errorMessage, type) {
  const inputValue = document.getElementById('filterInput').value.trim();
  
  queryRef.query = inputValue ? inputValue : '';  
  currentPageRef.currentPage = 1;  

  if (isValidInput(queryRef.query, type)) {
    errorMessage.style.display = 'none';
    await fetchDataFunction(); 
    document.getElementById('filterInput').value = '';  
  } else {
    errorMessage.textContent = type === 'ingredients' 
      ? 'Будь ласка, введіть лише англійські літери!' 
      : 'Будь ласка, введіть лише англійські літери або цифри!'; 
    errorMessage.style.display = 'block';
  }
}

function isValidInput(value, type) {
  if (type === 'ingredients') {
    const englishLetterPattern = /^[a-zA-Z]+$/;  
    return value !== '' && englishLetterPattern.test(value);
  } else if (type === 'cocktails') {
    const englishLetterOrNumberPattern = /^[a-zA-Z0-9]+$/; 
    return value !== '' && englishLetterOrNumberPattern.test(value);
  }
  return false;  
}

export function handleModalAction(event, value = false) {
  const targetButton = event.target.closest('.card__close-action');
  if (targetButton) {
    openModal.call(targetButton, value);
  }
}
