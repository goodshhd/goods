import React from 'react';

const Tag = ({ title }) => (
  <divs>
    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
      {title}
    </span>
  </divs>
);

export default Tag;
