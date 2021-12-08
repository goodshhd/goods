import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import MobileMenuButton from "../components/MobileMenuButton";

describe("mobileMenuButton", () => {
    it("render mobileMenuButton component", () => {
        render(<MobileMenuButton/>);
        expect(screen.getByRole("mobileMenuButton", {})).toBeInTheDocument();
    });
});