import { atom } from 'recoil';
import { signOut } from "next-auth/client";
import moment from "moment";

export const userData = atom({
    key: 'userKey',
    default: {}
});

export const tableData = atom({
    key: 'tableKey',
    default: [
        {
            id: 0,
            date: moment().format("MMM Do YY"),
            code: 'VB720',
            status: 'Active',
            company: 'ART-UA',
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            id: 1,
            date: moment().format("MMM Do YY"),
            code: 'VB800',
            status: 'Active',
            company: 'A-UA',
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            id: 2,
            date: moment().format("MMM Do YY"),
            code: 'VB300',
            status: 'Active',
            company: 'A-UA',
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            id: 3,
            date: moment().format("MMM Do YY"),
            code: 'KB800',
            status: 'Active',
            company: 'A-UA',
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            id: 4,
            date: moment().format("MMM Do YY"),
            code: 'SB80',
            status: 'Active',
            company: 'FA-UA',
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            id: 5,
            date: moment().format("MMM Do YY"),
            code: 'EB00',
            status: 'Active',
            company: 'RRR-UA',
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

export const datePickerState = atom({
    key: 'dateState',
    default: null
})