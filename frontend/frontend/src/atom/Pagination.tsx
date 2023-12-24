interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onChange }) => {

  const range = (start: number, end: number) => {
    return Array(end - start + 1).fill(0).map((_, idx) => start + idx);
  };

  // Determine the pages to display
  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  // Adjust the range if near the start or end
  const maxPagesToShow = 5;
  if (currentPage < 3) {
    endPage = Math.min(maxPagesToShow, totalPages);
  } else if (currentPage > totalPages - 2) {
    startPage = Math.max(1, totalPages - (maxPagesToShow - 1));
  }

  // Create the page buttons
  const pages = range(startPage, endPage).map(page => (
    <button
      key={page}
      disabled={currentPage === page-1}
      onClick={() => onChange(page-1)}
    >
      {page}
    </button>
  ));

  return (
    <div>
      <button onClick={() => onChange(0)} disabled={currentPage === 0}>
        First
      </button>
      {/* Other buttons for previous, specific page numbers, next, and last */}
      <button onClick={() => onChange(currentPage-1)} disabled={currentPage === 0}>
         previous
      </button>
      {pages}
      <button onClick={() => onChange(currentPage+1)} disabled={currentPage === totalPages-1}>
         next
      </button>
      <button onClick={() => onChange(totalPages)} disabled={currentPage === totalPages-1}>
        Last
      </button>
    </div>
  );
};

export default Pagination;

//TODO: Need refine
