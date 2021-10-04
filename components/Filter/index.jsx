import React from 'react';
import DateRangePickerCustom from '../dateRangePickerCustom';
import Input from '../Input';
import Select from '../Select';

const Filter = () => {
    return (
        <div className='w-full shadow-xl py-4 px-6 rounded-md'>
            <div className='w-full mb-4'>
                <span className='mr-auto'>Filter by</span>
            </div>
            <div className='flex items-center flex-col md:flex-row md:justify-between'>
                <DateRangePickerCustom />
                <div className='flex items-center justify-center'>
                    <div className='mx-4'>
                        <Input placeholder='VB720' label='Code' />
                    </div>
                    <div className='mx-4'>
                        <Select placeholder='ART-UA' label='Company'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;