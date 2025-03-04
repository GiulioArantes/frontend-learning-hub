document.addEventListener('DOMContentLoaded', () => {
  const itemsPerPage = 2;
  const concepts = document.querySelectorAll('.concept-snippet');
  const paginationList = document.querySelector('.pagination');
  const prevLink = document.getElementById('prev-page');
  const nextLink = document.getElementById('next-page');

  let currentPage = 1;
  const totalPages = Math.ceil(concepts.length / itemsPerPage);

  function showPage(page) {
    concepts.forEach((concept, index) => {
      concept.classList.toggle(
        'active',
        index >= (page - 1) * itemsPerPage && index < page * itemsPerPage
      );
    });
  }

  function updatePagination() {
    const existingPages = document.querySelectorAll('.page-item');
    existingPages.forEach((page) => page.remove());

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => {
      const page = i + 1;
      const li = document.createElement('li');
      li.className = 'page-item';

      const a = document.createElement('a');
      a.className = `pagination-link ${page === currentPage ? 'active' : ''}`;
      a.href = `#page-${page}`;
      a.innerHTML = `
          <span class="sr-only">Página</span>
          ${page}
        `;

      if (page === currentPage) {
        a.setAttribute('aria-current', 'page');
      }

      a.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = page;
        updatePagination();
      });

      li.appendChild(a);
      return li;
    });

    paginationList.insertBefore(pageNumbers[0], nextLink.parentElement);
    for (let i = 1; i < pageNumbers.length; i++) {
      paginationList.insertBefore(pageNumbers[i], nextLink.parentElement);
    }

    prevLink.parentElement.style.display =
      currentPage === 1 ? 'none' : 'inline-block';
    nextLink.parentElement.style.display =
      currentPage === totalPages ? 'none' : 'inline-block';
  }

  prevLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });

  nextLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
    }
  });

  showPage(currentPage);
  updatePagination();
});
