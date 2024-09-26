let currentPage = 1;

export function customPaginationElement(
  array,
  containerPagination,
  containerElementsRef,
  perPageCards = 6,
  renderFunction
) {
  const arrayOfArrays = array.reduce((acc, _, i) => {
    if (i % perPageCards === 0) {
      acc.push(array.slice(i, i + perPageCards));
    }
    return acc;
  }, []);

  const renderPage = () => {
    containerElementsRef.innerHTML = '';
    renderFunction(arrayOfArrays[currentPage - 1], containerElementsRef);
  };

  renderPage();

  renderPaginationNumbers(arrayOfArrays, containerPagination, renderPage);
}

function renderPaginationNumbers(arrayOfArrays, containerPagination, renderPage) {
  const totalPages = arrayOfArrays.length;
  const maxPageButtons = 6;

  const renderButtons = () => {
    let markup = [];
    
    markup.push(
      `<button class="pagination-btn js-pagination-btn-first" type="button" ${currentPage === 1 ? 'disabled' : ''}>&laquo;</button>`
    );

    markup.push(
      `<button class="pagination-btn js-pagination-btn-prev" type="button" ${currentPage === 1 ? 'disabled' : ''}>&lt;</button>`
    );
    
    const { startPage, endPage } = getPaginationRange(totalPages, currentPage, maxPageButtons);

    for (let i = startPage; i <= endPage; i++) {
      markup.push(
        `<button class="pagination-btn ${i === currentPage ? 'active' : ''}" type="button" data-page="${i}">${i}</button>`
      );
    }

    markup.push(
      `<button class="pagination-btn js-pagination-btn-next" type="button" ${currentPage === totalPages ? 'disabled' : ''}>&gt;</button>`
    );

    markup.push(
      `<button class="pagination-btn js-pagination-btn-last" type="button" ${currentPage === totalPages ? 'disabled' : ''}>&raquo;</button>`
    );

    markup.push(`<span class="pagination-info">Page ${currentPage} of ${totalPages}</span>`);

    containerPagination.innerHTML = markup.join('');
  };

  renderButtons();

  containerPagination.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('js-pagination-btn-first')) {
      currentPage = 1;
    } else if (target.classList.contains('js-pagination-btn-prev') && currentPage > 1) {
      currentPage -= 1;
    } else if (target.classList.contains('js-pagination-btn-next') && currentPage < totalPages) {
      currentPage += 1;
    } else if (target.classList.contains('js-pagination-btn-last')) {
      currentPage = totalPages;
    } else if (target.dataset.page) {
      currentPage = parseInt(target.dataset.page, 10);
    } else {
      return;
    }

    renderPage();
    renderButtons();  
  });
}

function getPaginationRange(totalPages, currentPage, maxPageButtons) {
  let startPage = currentPage - Math.floor(maxPageButtons / 2);
  let endPage = currentPage + Math.floor(maxPageButtons / 2);

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(totalPages, maxPageButtons);
  } else if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - maxPageButtons + 1);
  }

  return { startPage, endPage };
}
