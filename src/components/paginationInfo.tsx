import React from 'react';

const PaginationInfo: React.FC<{ currentPage: number; perPage: number; total: number }> = ({ currentPage, perPage, total }) => {
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, total);

  return (
    <p className='font-condensed mr-4 text-base font-semibold'>
      Showing {start} - {end} of {total}
    </p>
  );
};

export default PaginationInfo;
