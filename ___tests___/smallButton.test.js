import '@testing-library/jest-dom/extend-expect';

import { render, screen } from "@testing-library/react";
import SmallButton from "../components/SmallButton";

describe("SmallButton", () => {
    it('render SmallButton component', () => {
        render(<SmallButton />);
        expect(screen.getByRole('small-button', {})).toBeInTheDocument()
    })
});