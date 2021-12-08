import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import Logo from "../components/Logo";

describe("logo", () => {
    it("render logo component", () => {
        render(<Logo />);
        expect(screen.getByRole("logo", {})).toBeInTheDocument();
    });
});