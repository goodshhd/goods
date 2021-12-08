import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import Select from "../components/Select";

describe("Select", () => {
    it("render Select component", () => {
        render(<Select />);
        expect(screen.getByRole("select", {})).toBeInTheDocument();
    });
});