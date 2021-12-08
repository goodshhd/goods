import '@testing-library/jest-dom/extend-expect';

import { render, screen } from "@testing-library/react";
import TableRows from "../components/TableRows";

describe("TableRows", () => {
    it('render TableRows component', () => {
        render(<TableRows row1='' row2='' row3='' row4='' onDelete={() => {}} />);
        expect(screen.getByRole('table-rows', {})).toBeInTheDocument()
    })
});