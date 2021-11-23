import '@testing-library/jest-dom/extend-expect';

import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
    it('render Header component', () => {
        render(<Header />);
        expect(screen.getByRole('header', {})).toBeInTheDocument()
    })
})