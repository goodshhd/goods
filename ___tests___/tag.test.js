import '@testing-library/jest-dom/extend-expect';

import { render, screen } from "@testing-library/react";
import Tag from "../components/Tag";

describe("Tag", () => {
    it('render Tag component', () => {
        render(<Tag />);
        expect(screen.getByRole('tag', {})).toBeInTheDocument()
    })
});