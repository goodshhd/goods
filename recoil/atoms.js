import { atom } from 'recoil';
import { signOut } from "next-auth/client";


export const headerTabsState = atom({
    key: 'headerTabsState',
    default: []
});

export const mobileTabsState = atom({
    key: 'mobileTabsState',
    default: [
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
});

export const userData = atom({
    key: 'userData',
    default: {}
})