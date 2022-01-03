import React, {useState, useRef} from 'react';

import 'react-daterange-picker/dist/css/react-calendar.css';

import styles from './styles.module.css';

import DateRangePicker from 'react-daterange-picker';

import Button from '../Button';
import SmallButton from '../SmallButton';

import moment from 'moment';

import useOutsideClick from '../../utils/hooks/useOutsideClick';

const DateRangePickerCustom = ({onChange, value}) => {

    const [date, setDate] = useState(value);
    const [isOpen, setIsOpen] = useState(null);

    const onSave = () => {
        setIsOpen(false);
        onChange(date);
    };

    const wrapper = useRef(null);
    useOutsideClick(wrapper, () => setIsOpen(false));

    const onClose = () => setIsOpen(false);

    const defaultRange = moment().startOf('isoWeek').format('MMM Do YYYY') + ' - ' + moment().endOf('isoWeek').format('MMM Do YYYY');

    const titleRange = range => {
        return range && range.start && range.end ? range.start.format('MMM Do YYYY') + ' - ' + range.end.format('MMM Do YYYY') : defaultRange;
    };

    const onSelect = range => {
        setDate(range);
    };

    const arrowRight = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 6L15 12L9 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    const arrowLeft = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

    return (
        <div className='flex flex-row items-center' ref={wrapper} role="datePicker">
            <div className='hidden md:flex'>
                <SmallButton icon={arrowLeft} color='bg-yellow-500'/>
            </div>
            <div className='p-2 rounded-md border border-gray-300 mx-4 relative'
                 onClick={() => setIsOpen(!isOpen)}>
                <span className='text-gray-300 truncate'>{titleRange(date)}</span>
            </div>
            <div className='hidden md:flex'>
                <SmallButton icon={arrowRight} color='bg-yellow-500'/>
            </div>
            <div className={`${styles.datePickerHolder} ${isOpen ? 'visible' : 'hidden'}`}>
                <DateRangePicker
                    value={date}
                    firstOfWeek={1}
                    onSelect={onSelect}
                    numberOfCalendars={1}
                    minimumDate={moment('19700101', 'YYYYMMDD')}
                    initialYear={moment().startOf('day').year()}
                    initialMonth={moment().startOf('day').month()}
                />
                <div className='flex'>
                    <div className='cancel-btn w-full mr-4'>
                        <Button onClick={onClose} buttonText='Cancel'/>
                    </div>
                    <div className='w-full ml-4'>
                        <Button onClick={onSave} buttonText='Update'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DateRangePickerCustom;