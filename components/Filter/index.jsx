import React from 'react';

import Input from '../Input';
import Select from '../Select';
import DateRangePickerCustom from '../DateRangePickerCustom';

import {useRecoilState} from 'recoil';

import {codeInputState, companyDataState, selectedFilter} from '../../recoil/atoms';

const Filter = () => {
    const [codeInputValue, setCodeInputValue] = useRecoilState(codeInputState);
    const [,setFilterType] = useRecoilState(selectedFilter);
    const [selectedValue,setSelectedValue] = useRecoilState(companyDataState);

    const handleChange = data => {
        //TODO:logic for data change
        console.log(data);
    };
    const handleChangeInput = (e) => {
        setCodeInputValue(e.target.value);
        setFilterType('code');
    };
    const handleSelectCompany = selected => {
        setSelectedValue(selected);
        setFilterType('company');
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
                        <Input
                            name='filter_code'
                            type='text'
                            label='Code'
                            value={codeInputValue}
                            placeholder='VB720'
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className='mx-4 mt-8 md:mt-0'>
                        <Select
                            label='Company'
                            placeholder='ART-UA'
                            selectedValue={selectedValue}
                            onClick={handleSelectCompany}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filter;