import '@testing-library/jest-dom/extend-expect';

import { render, screen } from "@testing-library/react";
import TableHeader from "../components/TableHeader";

describe("TableHeader", () => {
    it('render TableHeader component', () => {
        render(<TableHeader headerData={[]} />);
        expect(screen.getByRole('table-header', {})).toBeInTheDocument()
    })
});