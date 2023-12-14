interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onChange }) => {
  return (
    <div>
      <button onClick={() => onChange(1)} disabled={currentPage === 1}>
        First
      </button>
      {/* Other buttons for previous, specific page numbers, next, and last */}
      <button onClick={() => onChange(totalPages)} disabled={currentPage === totalPages}>
        Last
      </button>
    </div>
  );
};

export default Pagination;

//TODO: Need refine
