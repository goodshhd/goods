import React, { useState, useRef } from "react";

import settingIcon from "../../public/icon/setting-icon.svg";

import { signOut } from "next-auth/client";

import Nav from "../Nav";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import SmallButton from "../SmallButton";
import DropdownWrapper from "../DropdownWrapper";
import MobileMenuButton from "../MobileMenuButton";
import useOutsideClick from "../../utils/hooks/useOutsideClick";
import LanguageSwitcher from "../LanguageSwitcher";
import {useTranslation} from "next-i18next";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const { t } = useTranslation('header-dropdown');

  const handleShowDropDown = () => setShowDropDown(!showDropDown);
  const handleCloseDropDown = () => setShowDropDown(false);

  const wrapper = useRef(null);
  useOutsideClick(wrapper, handleCloseDropDown);

  const dropdownData = [
    {
      title: t("your-profile-text"),
    },
    {
      title: t("settings-text"),
    },
    {
      title: t("sign-out-text"),
      handler: signOut
    },
  ];

  return (
    <nav className="bg-yellow-500" role="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo width={70} height={50} />
            <div className="hidden md:block text-sm">
              <Nav />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative flex items-center" ref={wrapper}>
                <LanguageSwitcher />
                <SmallButton
                  handleClick={handleShowDropDown}
                  icon={settingIcon}
                  color="bg-yellow-600"
                />
                <DropdownWrapper toggle={showDropDown} listData={dropdownData} />
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <MobileMenuButton
              handleMobileMenu={() => setToggleMobileMenu(!toggleMobileMenu)}
            />
          </div>
        </div>
      </div>
      {toggleMobileMenu && (
        <div className="md:hidden">
          <MobileMenu />
        </div>
      )}
    </nav>
  );
};

export default Header;
