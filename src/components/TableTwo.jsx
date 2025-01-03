import React from 'react';

const TableTwo = () => {
  let tableContent = [];
  for (let i = 1; i <= 10; i++) {
    tableContent.push(
      <p key={i}>
        2 * {i} = {2 * i}
      </p>
    );
  }

  return (
    <div className='flex items-center justify-center py-[60px] flex-col max-lg:px-5 max-lg:py-10 max-md:py-8 max-sm:py-5'>
      <h2 className='font-bold text-center leading-[44px] max-md:leading-[40px] max-sm:leading-[36px] text-4xl max-lg:text-3xl max-md:text-2xl pb-2'>Print table of 2</h2>
      {tableContent}
    </div>
  );
};

export default TableTwo;
