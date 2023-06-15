import React from 'react';

const Pagination = ({ page, setPage }) => {
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <div className="container">
      <button className="btn btn-primary" onClick={handlePrevious}>
        Previous
      </button>
      <span className="mx-3">Page: {page}</span>
      <button className="btn btn-primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
