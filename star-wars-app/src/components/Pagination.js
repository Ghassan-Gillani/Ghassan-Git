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
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <span>Page: {page}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
