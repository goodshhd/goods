import React from 'react';
import Button from "../Button";
import Tag from "../Tag";

const TableRows = ({fi, se, th, fr}) => {
    return (
        <div className='flex justify-between'>
            <div className='py-3 px-6 px-auto text-xs font-medium text-gray-500 flex items-start justify-start w-24'>
                <div>{se}</div>
            </div>
            <div className='py-3 px-6 text-xs font-medium text-gray-500 flex items-start justify-start w-24'>
                <div>{fi}</div>
            </div>
            <div className='py-3 px-6 text-xs font-medium text-gray-500 ßflex items-start justify-start w-24'>
                <Tag title={fr} />
            </div>
            <div className='py-3 px-6 text-xs font-medium text-gray-500 ßflex items-start justify-start w-24'>
                <div>{th}</div>
            </div>
            <div className='py-3 px-6 text-xs font-medium text-gray-500 ßflex items-start justify-start w-24 cursor-pointer'>
                <div className='text-red-500'>Delete</div>
            </div>
        </div>
    );
};

export default TableRows;