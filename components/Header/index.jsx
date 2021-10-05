import React, {useState, useRef} from 'react';

import logo from '../../public/images/logo-goods-white.svg';
import settingIcon from '../../public/icon/setting-icon.svg';

import {signOut} from 'next-auth/client';

import Nav from '../Nav';
import Image from 'next/image';
import MobileMenu from '../MobileMenu';
import SmallButton from '../SmallButton';
import DropdownWrapper from '../DropdownWrapper';
import MobileMenuButton from '../MobileMenuButton';
import useOutsideClick from '../../utils/hooks/useOutsideClick';

const Header = () => {

    const [showDropDown, setShowDropDown] = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const handleShowDropDown = () => setShowDropDown(!showDropDown);
    const handleCloseDropDown = () => setShowDropDown(false);

    const wrapper = useRef(null);
    useOutsideClick(wrapper, handleCloseDropDown);

    return (
        <nav className='bg-yellow-500'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                            <Image height={50} width={50} src={logo} alt='Workflow'/>
                        </div>
                        <div className='hidden md:block text-sm'>
                            <Nav />
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-4 flex items-center md:ml-6'>
                            <div className='ml-3 relative' ref={wrapper}>
                                <SmallButton handleClick={handleShowDropDown} icon={settingIcon} color='bg-yellow-600'/>
                                <DropdownWrapper toggle={showDropDown}>
                                    <div
                                        className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                        <a href='#' className='block px-4 py-2 text-sm text-gray-700'>Your Profile</a>

                                        <a href='#' className='block px-4 py-2 text-sm text-gray-700'>Settings</a>

                                        <a href='#' className='block px-4 py-2 text-sm text-gray-700' onClick={signOut}>Sign
                                            out</a>
                                    </div>
                                </DropdownWrapper>
                            </div>
                        </div>
                    </div>
                    <div className='-mr-2 flex md:hidden'>
                        <MobileMenuButton handleMobileMenu={() => setToggleMobileMenu(!toggleMobileMenu)} />
                    </div>
                </div>
            </div>
            {
                toggleMobileMenu &&
                <div className='md:hidden'>
                    <MobileMenu />
                </div>
            }
        </nav>
    );
};

export default Header;