import { atom } from 'recoil';
import { signOut } from "next-auth/client";


export const userData = atom({
    key: 'userData',
    default: {}
});

export const tableData = atom({
    key: 'tableData',
    default: [
        {
            userId: 1,
            code: 'VB720',
            company: 'ART-UA',
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            code: 'VB800',
            company: 'A-UA',
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            code: 'VB300',
            company: 'A-UA',
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            code: 'KB800',
            company: 'A-UA',
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            code: 'SB80',
            company: 'FA-UA',
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            code: 'EB00',
            company: 'RRR-UA',
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
    ]
});

export const selectedFilter = atom({
    key: 'selectedFilter',
    default: ''
});

export const codeInputState = atom({
    key: 'codeInputState',
    default: ''
});

export const companyDataState = atom({
    key: 'companyDataState',
    default: ''
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

export const headerTabsState = atom({
    key: 'headerTabsState',
    default: []
});
