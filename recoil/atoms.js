import { atom } from 'recoil';
import { session, signOut } from "next-auth/client";


export const headerTabsState = atom({
    key: 'headerTabsState',
    default: [
        {
            link: `/${session?.user?.email}/workboard`,
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