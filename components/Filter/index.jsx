import React from 'react';
import DateRangePickerCustom from '../DateRangePickerCustom';
import Input from '../Input';
import Select from '../Select';

const Filter = () => {
    const handleChange = data => {
        console.log(data);
    };

    return (
        <div className='w-full shadow-xl py-4 px-6 rounded-md'>
            <div className='w-full mb-4'>
                <span className='mr-auto'>Filter by</span>
            </div>
            <div className='flex items-center flex-col md:flex-row md:justify-between'>
                <DateRangePickerCustom onChange={(e) => handleChange({data: e})}/>
                <div className='flex items-left justify-center flex-col md:flex-row md:items-center'>
                    <div className='mx-4 mt-8 md:mt-0'>
                        <Input placeholder='VB720' label='Code' />
                    </div>
                    <div className='mx-4 mt-8 md:mt-0'>
                        <Select placeholder='ART-UA' label='Company'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;