import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import CustomDropdown from "../components/CustomDropdown";

describe("customDropDown", () => {
    it("render customDropDown component", () => {
        render(
           <CustomDropdown />
        );
        expect(screen.getByRole("customDropDown", {})).toBeInTheDocument();
    });
});