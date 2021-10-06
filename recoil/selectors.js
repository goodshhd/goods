import  { selector } from "recoil";
import {tableData, codeInputState, selectedFilter, companyDataState} from "./atoms";


export const userState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const value = get();

        return value;
    },
});

export const filterTableData = selector({
    key:'filterTableData',
    get: ({get}) => {

        const initialData = get(tableData);

        const selected = get(selectedFilter);
        const selectedData = get(companyDataState);

        const filteredValue = get(codeInputState);

        switch (selected) {
            case 'code':
                return initialData.filter((item) => item.code.includes(filteredValue));
            case 'company':
                return initialData.filter((item) => item.company === selectedData);
            default:
                return initialData;
        }

    },
});