import Image from "next/image";
import settingIcon from "../../public/static/icon/setting-icon.svg";

const SettingButton = ({handleShowDropDown}) => (
    <div>
        <button type="button"
                className=" p-2 max-w-xs bg-yellow-600 rounded-md flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={handleShowDropDown}>
            <span className="sr-only">Open user menu</span>
            <Image className="h-8 w-8"
                   src={settingIcon}
                   alt="setting"/>
        </button>
    </div>
);

export default SettingButton;