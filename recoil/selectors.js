import { selector } from "recoil";
import {
  tableData,
  codeInputState,
  selectedFilter,
  companyDataState, datePickerState,
} from "./atoms";

export const filterTableData = selector({
  key: "filterTableData",
  get: ({ get }) => {
    const initialData = get(tableData);

    const selected = get(selectedFilter);
    const selectedData = get(companyDataState);
    const selectedDate = get(datePickerState);

    const filteredValue = get(codeInputState);

    switch (selected) {
      case "code":
        return initialData.filter((item) => item.code.includes(filteredValue));
      case "company":
        return initialData.filter((item) => item.company === selectedData);
      case "date":
        return initialData.filter((item) => item.date === selectedDate);
      default:
        return initialData;
    }
  },
});
