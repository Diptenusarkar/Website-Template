import React from 'react';

const RoundedPrice = ({ price }) => {
  return (
    <p className='text-sm text-gray-600 font-semibold'>₹{Math.ceil(price*80)}</p>
  );
};

export default RoundedPrice;