import React, {useState} from "react";
import Image from "next/image";
import logo from "../../public/images/logo-goods-white.svg";
import DropdownWrapper from "../DropdownWrapper";
import {signOut, useSession} from "next-auth/client";
import Nav from "../Nav";
import SettingButton from "../SettingButton";
import MobileMenuButton from "../MobileMenuButton";
import MobileMenu from "../MobileMenu";

const Header = () => {
    const [session] = useSession();
    const [showDD, setShowDD] = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

    const tabs = [
        {
            link: `/${session.user.email}/workboard`,
            title: 'Workboard'
        },
        {
            link: '#',
            title: 'Team'
        },
        {
            link: '#',
            title: 'Projects'
        },
        {
            link: '#',
            title: 'Calendar'
        },
        {
            link: '#',
            title: 'Reports'
        },
    ]

    const mobileSettingsTabs = [
        {
            link: '#',
            title: 'Your Profile',
            action: null
        },
        {
            link: '#',
            title: 'Settings',
            action: null
        },
        {
            link: '#',
            title: 'Sign out',
            action: signOut,
        },
    ]

    return (
        <nav className="bg-yellow-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Image height={50} width={50} src={logo} alt="Workflow"/>
                        </div>
                        <div className="hidden md:block text-sm">
                            <Nav tabsData={tabs}/>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <div className="ml-3 relative">
                                <SettingButton handleShowDropDown={() => setShowDD(!showDD)}/>
                                <DropdownWrapper toggle={showDD}>
                                    <div
                                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
                                        tabIndex="-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                           tabIndex="-1" id="user-menu-item-0">Your Profile</a>

                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                           tabIndex="-1" id="user-menu-item-1">Settings</a>

                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
                                           tabIndex="-1" id="user-menu-item-2" onClick={signOut}>Sign out</a>
                                    </div>
                                </DropdownWrapper>
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <MobileMenuButton handleMobileMenu={() => setToggleMobileMenu(!toggleMobileMenu)}/>
                    </div>
                </div>
            </div>
            {
                toggleMobileMenu &&
                <div className="md:hidden" id="mobile-menu">
                    <MobileMenu user={session.user} menuTabs={tabs} settingsTabs={mobileSettingsTabs}/>
                </div>
            }
        </nav>
    )
}

export default Header;