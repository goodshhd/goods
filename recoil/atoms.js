import { atom } from 'recoil';
import { signOut } from "next-auth/client";


export const userData = atom({
    key: 'userKey',
    default: {}
});

export const tableData = atom({
    key: 'tableKey',
    default: [
        {
            userId: 0,
            code: 'VB720',
            company: 'ART-UA',
            status: 'Active',
            id: 0,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 1,
            code: 'VB800',
            company: 'A-UA',
            status: 'Active',
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 2,
            code: 'VB300',
            company: 'A-UA',
            status: 'Active',
            id: 2,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 3,
            code: 'KB800',
            company: 'A-UA',
            status: 'Active',
            id: 3,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 4,
            code: 'SB80',
            company: 'FA-UA',
            status: 'Active',
            id: 4,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            userId: 5,
            code: 'EB00',
            company: 'RRR-UA',
            status: 'Active',
            id: 5,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
    ]
});

export const selectedFilter = atom({
    key: 'selectedFilterKey',
    default: ''
});

export const codeInputState = atom({
    key: 'codeInputKey',
    default: ''
});

export const companyDataState = atom({
    key: 'companyDataKey',
    default: ''
});

export const mobileTabsState = atom({
    key: 'mobileKey',
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
    key: 'headerKey',
    default: []
});
