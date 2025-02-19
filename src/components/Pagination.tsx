import React from "react";
import "../index.css";

interface PaginationProps {
  page: number;
  total: number;
  limit: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, total, limit, setPage }) => {
  return (
    <div className="pagination-container">
      <button onClick={() => setPage(page - 1)} disabled={page === 1} className="pagination-button">
        ⬅ Previous
      </button>
      <span className="pagination-info">Page {page} of {Math.ceil(total / limit)}</span>
      <button onClick={() => setPage(page + 1)} disabled={page >= Math.ceil(total / limit)} className="pagination-button">
        Next ➡
      </button>
    </div>
  );
};

export default Pagination;
