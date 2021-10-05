import  { selector } from "recoil";

export const userState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const value = get();

        return value;
    },
});