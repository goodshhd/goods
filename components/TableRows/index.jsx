import React from 'react';

import Tag from '../Tag';

const TableRows = ({row1, row2, row3, row4, onDelete}) => {
    return (
        <div className='flex justify-between'>
            <div className='py-3 px-6 px-auto text-xs font-medium text-gray-500 flex items-start justify-start w-24'>
                <div>{row3}</div>
            </div>
            <div className='py-3 px-6 text-xs font-medium text-gray-500 flex items-start justify-start w-24'>
                <div>{row2}</div>
            </div>
            <div className='py-3 px-6 text-xs font-medium text-gray-500 ßflex items-start justify-start w-24'>
                <div>{row1}</div>
            </div>
            <div className='py-3 px-6 text-xs font-medium text-gray-500 ßflex items-start justify-start w-24'>
                <Tag title={row4} />
            </div>
            <div className='py-3 px-6 text-xs font-medium text-gray-500 ßflex items-start justify-start w-24 cursor-pointer'>
                <div className='text-red-500' onClick={onDelete}>Delete</div>
            </div>
        </div>
    );
};

export default TableRows;