import Tab from "../Tab";
import {useRouter} from "next/router";

const MobileMenu = ({user, menuTabs, settingsTabs}) => {
    const {asPath} = useRouter();

    const renderItems = (tab, i) => (
        <Tab
            link={tab.link}
            title={tab.title}
            pathName={asPath}
            key={`${i}+${tab.link}`}
            onClick={tab.action ? tab.action : null}
        />
    );

    return (
        <>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col text-md">
                {menuTabs.map(renderItems)}
            </div>
            <div className="pt-4 pb-3 border-t border-white">
                <div className="flex items-center px-5">
                    <div className="bg-yellow-600 w-full p-2 rounded-md">
                        <div className="text-base font-medium leading-none text-white">Some User</div>
                        <div className="text-sm font-medium leading-none text-white mt-2">{user.email || user.name}</div>
                    </div>
                </div>
                <div className="mt-3 px-2 space-y-1 flex flex-col text-md">
                    {settingsTabs.map(renderItems)}
                </div>
            </div>
        </>
    );
}

export default MobileMenu