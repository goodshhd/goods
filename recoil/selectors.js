import  { selector } from "recoil";
import {userData} from "./atoms";

export const userState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const user = get(userData);

        return user;
    },
});