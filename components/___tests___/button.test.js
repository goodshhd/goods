import '@testing-library/jest-dom/extend-expect';

import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
 it('render Button component', () => {
     render(<Button />);
     expect(screen.getByRole('button', {})).toBeInTheDocument()
 })
});