import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import DateRangePickerCustom from "../components/DateRangePickerCustom";
import { RecoilRoot } from "recoil";

describe("datePicker", () => {
    it("render datePicker component", () => {
        render(
                <DateRangePickerCustom onChange={() => {}}/>
        );
        expect(screen.getByRole("datePicker", {})).toBeInTheDocument();
    });
});
