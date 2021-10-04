import React from 'react';
import SmallButton from '../SmallButton';
import arrowLeft from '../../public/icon/arrow-left.svg';
import arrowRight from '../../public/icon/arrow-right.svg';

const DateRangePickerCustom = () => {
    return (
        <div className='flex flex-row items-center'>
            <div className='order-1'>
                <SmallButton icon={arrowLeft} color='bg-yellow-500' />
            </div>
            <div className='p-2 rounded-md border border-gray-300 mx-4 order-3 md:order-2'>
                <span className='text-gray-300 truncate'>Jun 21, 2020 - Jun 30, 2020</span>
            </div>
            <div className='order-2 md:order-3'>
                <SmallButton icon={arrowRight} color='bg-yellow-500' />
            </div>
        </div>
    );
};

export default DateRangePickerCustom;