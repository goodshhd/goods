import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import Input from "../components/Input";

describe("Input", () => {
    it("render Input component", () => {
        render(
            <Input />
        );
        expect(screen.getByRole("input", {})).toBeInTheDocument();
    });
});