import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import useOutsideClick from "../../utils/hooks/useOutsideClick";

const Select = ({placeholder, label}) => {
    const [toggle, setToggle] = useState(false);
    const handleCloseWin = () => setToggle(false);
    const handleToggle = () => setToggle(!toggle)

    const wrapper = useRef(null);
    useOutsideClick(wrapper, handleCloseWin);

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <div className="mt-1 relative" ref={wrapper}>
                <button type="button"
                        className="relative w-full text-gray-300 bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" onClick={handleToggle}>
                         <span className="flex items-center">
                            {placeholder}
                         </span>
                    <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                             fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                      clipRule="evenodd"/>
                        </svg>
                    </span>
                </button>
                {toggle && (
                    <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                            <span className="font-normal ml-3 block truncate">
                                    Wade Cooper
                            </span>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Select;

Select.propTypes = {
    placeholder: PropTypes.string,
    label: PropTypes.string
};

Select.defaultProps = {
    placeholder: '',
    label: ''
};