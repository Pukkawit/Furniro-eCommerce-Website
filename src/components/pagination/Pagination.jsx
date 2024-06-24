import React from "react";
import "./pagination.scss"; // Import the CSS file for styling

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  currentButtonGroup,
  handleNextGroup,
  handlePrevGroup,
}) => {
  return (
    <div className="pagination">
      {currentButtonGroup[0] > 1 && (
        <button onClick={handlePrevGroup}>Previous</button>
      )}
      {currentButtonGroup.map((page) => (
        <button
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      {currentButtonGroup[currentButtonGroup.length - 1] < totalPages && (
        <button onClick={handleNextGroup}>Next</button>
      )}
    </div>
  );
};

export default Pagination;
